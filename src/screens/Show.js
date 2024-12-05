import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../services/blogServices";
import { useParams } from "react-router";
import Nav from "../components/Nav";
import ProfileImage from "../images/profile.png";
import { deleteBlog } from "../services/blogServices";
import { useNavigate } from "react-router";
import { setBlogsInSlice } from "../redux/slices/blogsSlice";
import { fetchBlogs } from "../services/blogServices";

const Show = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBlogs);
  }, [dispatch]);

  const { blog } = useSelector((state) => state.aBlog);
  const { user } = useSelector((state) => state.adminUser);
  const { blogs } = useSelector((state) => state.allBlogs);
  const [submissionError, setSubmissionError] = useState(
    "Oops! something went wrong. Try again"
  );

  const handleDeleteBlog = () => {
    dispatch(deleteBlog(id))
      .unwrap()
      .then((response) => {
        if (response.status === "success") {
          const updatedData = blogs.filter((item) => item._id !== id);
          dispatch(setBlogsInSlice(updatedData));
          navigate("/blog");
        }
      })
      .catch((error) => {
        console.error(error);
        setSubmissionError("Oops! something went wrong. Try again");
      });
  };

  useEffect(() => {
    dispatch(fetchBlog(id));
    setSubmissionError("");
  }, [dispatch, id]);
  return (
    <div className='container mx-auto'>
      <div className='lg:mx-32 lg:mt-12'>
        <Nav />
        {blog ? (
          <div className='px-7 lg:px-0 max-w-2xl mx-auto mt-7 lg:mt-14 pb-14'>
            <h1 className='text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-100'>
              {blog.title}
            </h1>

            {submissionError ? (
              <h1 className='mt-3 text-red-500 text-lg'>{submissionError}</h1>
            ) : (
              ""
            )}

            <div className='flex justify-between items-center my-5'>
              <div className='flex items-center space-x-2'>
                <img
                  className='rounded-full w-7 h-7'
                  src={ProfileImage}
                  alt='Tonny tei'
                />
                {user ? (
                  <div className='flex gap-3'>
                    <Link
                      to={`/blog/edit/${id}`}
                      className='text-blue-500 underline'>
                      Edit article
                    </Link>
                    <button
                      onClick={handleDeleteBlog}
                      className='text-red-500 underline'>
                      Delete article
                    </button>
                  </div>
                ) : (
                  <a href='/' className='text-red-500'>
                    Tonny Tei
                  </a>
                )}
              </div>
              <div className='text-gray-500 text-sm dark:text-gray-400'>
                <span>22.08.2024</span>
              </div>
            </div>

            <div
              className='dark:text-white text-lg markdown-container'
              id='content'
              dangerouslySetInnerHTML={{ __html: blog.sanitizedHtml }}></div>
          </div>
        ) : (
          <div className='flex'>
            {" "}
            <h1>Oops!! something went wrong</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Show;
