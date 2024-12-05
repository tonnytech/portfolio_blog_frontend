import React from "react";

const BlogSearch = () => {
  return (
    <form action='' method='get'>
      <div className='flex justify-center items-center mt-7'>
        <input
          type='text'
          name='engine'
          placeholder='search documentation...'
          className='absolute rounded-lg py-1 px-5 w-80 md:w-96 ring-4 ring-gray-300 ring-opacity-50 dark:ring-grey-700 dark:bg-gray-600 dark:text-grey-200 focus:outline-none'
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
  );
};

export default BlogSearch;
