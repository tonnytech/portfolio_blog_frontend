import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchByTag } from "../services/blogServices";
import { useDispatch, useSelector } from "react-redux";
import { searchByEngine } from "../services/blogServices";
import { fetchBlogs } from "../services/blogServices";
import SearchNotFound from "./SearchNotFound";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";

const BlogHero = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const { blogsIsLoading, blogs, tags } = useSelector(
    (state) => state.allBlogs
  );

  const { tagBlogIsLoading, tagBlog } = useSelector((state) => state.tagSearch);
  const { searchIsLoading, Search, searchStatus } = useSelector(
    (state) => state.searchEngine
  );

  const [mySearch, setMySearch] = useState("");

  const [tryRefil, setTryRefil] = useState(false);

    const [showError, setShowError] = useState(false);

  let profileBlogs = [];

  if (blogs.length >= 3) {
    const [a, b, c] = blogs;
    profileBlogs = blogs.length ? [a, b, c] : [];
  } else {
    profileBlogs = blogs;
  }

  // const innitialBlogs = blogs && blogs.length ? [a, b, c] : [];

  const [innitialBlogs, setInnitialBlogs] = useState(profileBlogs);

  const [tagArray, setTagArray] = useState(innitialBlogs);

  useEffect(() => {
    if (searchStatus.startsWith("empty")) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [searchStatus]);

  const isNextEven = (i) => {
    return (i + 1) % 2 === 0;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const trimedSearch = mySearch.trim();
    if (trimedSearch) {
      dispatch(searchByEngine(trimedSearch));
      setTagArray(innitialBlogs);
    } else {
      setMySearch("");
      return;
    }
  };

  useEffect(() => {
    if (Search && Search.length) {
      setTagArray(Search);
    }
  }, [Search, Search.length]);

  useEffect(() => {
    if (tagBlog && tagBlog.length) {
      setTagArray(tagBlog);
    }
  }, [tagBlog, tagBlog.length]);

  useEffect(() => {
    if (!tagArray.length && tryRefil === false) {
      dispatch(fetchBlogs());
      setInnitialBlogs(blogs);
      setTagArray(blogs);
      setTryRefil(true);
    }
  }, [tryRefil, tagArray, tagArray.length, dispatch, blogs]);

  return (
    <>
      <div className='flex justify-center items-center'>
        {showError && (
          <div className='flex items-center justify-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-red-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 8v4m0 4h.01m-6.938 4h13.856c1.054 0 1.918-.816 1.995-1.85l.007-.15V6c0-1.054-.816-1.918-1.85-1.995L18.937 4H6.062c-1.054 0-1.918.816-1.995 1.85L4 6v12c0 1.054.816 1.918 1.85 1.995l.15.007z'
              />
            </svg>
            <h1 className='text-red-700 font-bold'>Sorry, search not found</h1>
          </div>
        )}
      </div>

      <form action='' onSubmit={handleSearch}>
        <div className='flex justify-center items-center mt-7'>
          <input
            type='text'
            name='query'
            onChange={(e) => setMySearch(e.target.value)}
            placeholder='search documentation...'
            className='absolute rounded-lg py-1 px-5 w-80 md:w-96 ring-4 ring-gray-300 ring-opacity-50 dark:ring-grey-700 dark:bg-gray-600 dark:text-grey-200 dark:text-white focus:outline-none'
          />
          <button
            type='submit'
            className='relative left-32 md:left-40 pl-0 text-gray-300 dark:text-grey-400 focus:outline-none'>
            <svg
              className='h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
      </form>

      <div className='mt-16'>
        {blogsIsLoading || tagBlogIsLoading || searchIsLoading ? (
          blogsIsLoading ? (
            <Loading />
          ) : tagBlogIsLoading ? (
            <Loading />
          ) : searchIsLoading ? (
            <Loading />
          ) : (
            <Loading />
          )
        ) : tagArray && tagArray.length ? (
          // <li className='grid grid-cols-1 sm:grid-cols-2 gap-1 w-full'>
          <ul className='pb-4 px-0 lg:flex lg:space-x-2'>
            <li className='flex flex-col w-full'>
              {tagArray.map((blog, i) => (
                <div
                  key={i}
                  className={`${
                    isNextEven(i + 1)
                      ? "bg-gray-100 dark:bg-gray-800"
                      : "bg-white dark:bg-gray-900"
                  } p-3 flex items-center justify-between text-gray-700 dark:text-white`}>
                  <div className='flex items-start'>
                    <svg
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path>
                    </svg>
                    <Link
                      to={`/blog/${blog._id}`}
                      className='pl-6 hover:underline h-6 overflow-hidden'>
                      {blog.title}
                    </Link>
                  </div>
                  <div className='text-xs'>
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </li>
          </ul>
        ) : tagArray && !tagArray.length ? (
          <SearchNotFound />
        ) : (
          <ErrorComponent />
        )}
      </div>

      <div className='pb-4 px-2 md:px-0'>
        <h1 className='font-cond font-bold text-gray-800 dark:text-white text-xl py-2'>
          {" "}
          <span className='text-red-500'>#</span> tags
        </h1>
        <div className=' grid grid-cols-3 md:grid-cols-6 justify-start items-center text-gray-600 dark:text-gray-300 px-2'>
          {tags.map((tag, i) => (
            <button
              key={i}
              onClick={() => dispatch(searchByTag(tag._id))}
              className='cursor-pointer  bg-gray-100 dark:bg-gray-800 text-center p-1 border-4 border-white dark:border-gray-900'>
              {tag._id} (<span className='text-red-500'>{tag.count}</span>)
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogHero;
