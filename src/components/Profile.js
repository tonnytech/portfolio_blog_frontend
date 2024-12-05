import React from "react";
import ProfileImage from "../images/profile.png";

const Profile = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-800 p-7 border-b-2 border-dashed border-gray-400 mb-5 md:flex md:flex-row-reverse'>
      {/* <div className='flex justify-center'>
        <img
          src={ProfileImage}
          alt='Profile'
          className='rounded-full h-20 md:h-24 ring-2 ring-offset-4 md:ring-3 md:ring-offset-7 ring-gray-800 dark:ring-white'
        />
      </div> */}

      {/* <div className='mt-4 text-center'>
        <h1 className='font-bold font-sans text-gray-800 dark:text-white'>
          Tonny Tei
        </h1>
        <p className='text-sm dark:text-gray-300 font-cond'>
          just documentation of my <span className='text-red-500'>code</span>
        </p>
      </div> */}

      {/* <form action='' method='get'>
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
      </form> */}
      {/* ======================================================================================================= */}

      <div className='flex justify-center content-center w-full md:w-1/2 md:pt-28 xl:pt-7'>
        <img
          src={ProfileImage}
          alt='Profile'
          className='rounded-full h-40 md:h-48 xl:h-60 ring-2 ring-offset-4 md:ring-3 md:ring-offset-7 ring-gray-800 dark:ring-white'
        />
      </div>

      <div className='md:w-1/2 text-left pt-6 md:pt-14 pb-2'>
        <div className='border-b-4 border-white mb-4 dark:text-white'>
          <h1 className='text-2xl'>Tonny Tei</h1>
          <h2 className='text-1xl'>Software developer</h2>
        </div>

        <p className='dark:text-white'>
          Hi, I'm Tonny and I enjoy software development.
          <br />
          Check out{" "}
          <span className='border-b-2 border-red-500 cursor-pointer font-bold'>
            my resume{" "}
          </span>{" "}
          or{" "}
          <span className='border-b-2 border-red-500 cursor-pointer font-bold'>
            <a href='#projects'>projects</a>
          </span>{" "}
          to know more about my work. <br /> If you are positive I may be of
          help in your company or project,{" "}
          <span className='border-b-2 border-red-500 cursor-pointer font-bold'>
            <a href='#contact'>contact me</a>
          </span>{" "}
          <br /> <br />
          Thanks.
        </p>
      </div>
    </div>
  );
};

export default Profile;
