import React from "react";
import Nav from "../components/Nav";

const Resume = () => {
  return (
    <div className='container px-auto'>
      <div className='lg:mx-32 lg:pt-12 bg-white shadow-lg p-8 rounded-lg'>
        <Nav />

        {/* Header Section */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Your Name</h1>
          <p className='text-gray-600'>
            Software Developer | Your City, Country
          </p>
          <p className='text-sm text-gray-500'>
            Email: your.email@example.com | Phone: +1234567890
          </p>
          <p className='text-sm text-gray-500'>
            Portfolio: your-portfolio.com | LinkedIn:
            linkedin.com/in/yourprofile
          </p>
        </div>

        {/* About Section */}
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-gray-800 border-b pb-2'>
            About Me
          </h2>
          <p className='text-gray-700 mt-4'>
            Enthusiastic and detail-oriented software developer with experience
            in creating dynamic and scalable web applications. Passionate about
            leveraging modern technologies to solve real-world problems.
          </p>
        </section>

        {/* Skills Section */}
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-gray-800 border-b pb-2'>
            Skills
          </h2>
          <div className='mt-4 grid grid-cols-2 gap-4'>
            <ul className='list-disc list-inside'>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Node.js</li>
            </ul>
            <ul className='list-disc list-inside'>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </section>

        {/* Experience Section */}
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-gray-800 border-b pb-2'>
            Experience
          </h2>
          <div className='mt-4'>
            <div className='mb-4'>
              <h3 className='font-bold text-lg text-gray-800'>
                Software Developer
              </h3>
              <p className='text-gray-600'>Company Name | Jan 2022 - Present</p>
              <ul className='list-disc list-inside mt-2 text-gray-700'>
                <li>
                  Developed and maintained scalable web applications using MERN
                  stack.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver
                  high-quality software.
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold text-lg text-gray-800'>
                Frontend Developer Intern
              </h3>
              <p className='text-gray-600'>
                Company Name | Jun 2021 - Dec 2021
              </p>
              <ul className='list-disc list-inside mt-2 text-gray-700'>
                <li>
                  Implemented responsive UI components using React and Tailwind
                  CSS.
                </li>
                <li>
                  Optimized application performance by 30% through efficient
                  code practices.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-gray-800 border-b pb-2'>
            Education
          </h2>
          <div className='mt-4'>
            <div>
              <h3 className='font-bold text-lg text-gray-800'>
                Bachelor of Science in Computer Science
              </h3>
              <p className='text-gray-600'>University Name | 2018 - 2022</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-gray-800 border-b pb-2'>
            Projects
          </h2>
          <div className='mt-4'>
            <div className='mb-4'>
              <h3 className='font-bold text-lg text-gray-800'>Project Name</h3>
              <p className='text-gray-600'>
                Description of the project and key achievements.
              </p>
              <a
                href='https://github.com/your-repo'
                className='text-blue-500 underline'>
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className='text-center text-sm text-gray-500 mt-8'>
          © 2024 Your Name. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Resume;
