import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full bg-gray-50 text-gray-700'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12 text-red-500 animate-spin mb-4'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'>
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'></circle>
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8v8H4z'></path>
      </svg>
      <h1 className='text-xl font-medium'>Loading...</h1>
    </div>
  );
}

export default Loading
