import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Currently = ({ blogs, blogsIsLoading }) => {
  let profileBlogs = [];

  if (blogs.length >= 3) {
    const [a, b, c] = blogs;
    profileBlogs = blogs.length ? [a, b, c] : [];
  } else {
    profileBlogs = blogs;
  }

  return (
    <>
      <h1 className='font-cond font-bold text-gray-800 dark:text-white text-xl md:px-0 pb-2'>
        <span className='text-red-500' id='docs'>
          #
        </span>{" "}
        blogs
      </h1>
      <ul className='mb-4 px-0 lg:flex lg:space-x-2'>
        {blogsIsLoading ? (
          <Loading />
        ) : (
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 w-full'>
            {profileBlogs.map((blog, i) => (
              <li
                key={i}
                className=' bg-white dark:bg-gray-800 p-3 flex items-center justify-between text-gray-700 dark:text-white w-full'>
                <div className='flex items-start'>
                  <svg
                    className='w-5 h-5 absolute'
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
              </li>
            ))}
          </ul>
        )}
      </ul>
      <Link to='/blog'>
        <button className='text-red-700 text-center w-full focus:outline-none'>
          --- see more ---
        </button>
      </Link>
    </>
  );
};

export default Currently;
