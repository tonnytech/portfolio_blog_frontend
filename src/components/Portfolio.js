import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";
import { baseUrl } from "../sideCode/side";
import { deleteProject } from "../services/projectServices";
import { reloadPage } from "../sideCode/side";

const Portfolio = ({ projectsIsLoading, displayProjects, showButton }) => {
  const { user } = useSelector((state) => state.adminUser);
  const dispatch = useDispatch();

  return (
    <div className='mb-16' id='projects'>
      <h1 className='font-cond font-bold text-gray-800 dark:text-white text-xl px-2 md:px-0 py-4'>
        <span className='text-red-500'>#</span> Portfolio
      </h1>
      <>
        {projectsIsLoading ? (
          <Loading />
        ) : displayProjects && displayProjects.length ? (
          <div className='mb-6 grid lg:grid-cols-3 gap-2 container px-3 lg:px-0'>
            {displayProjects.map((project, i) => (
              <article
                key={i}
                className='bg-gray-100 dark:bg-gray-800'
                rel='noreferrer'
                target='_blank'>
                <div className='p-4 text-gray-600 dark:text-white rounded-md'>
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <img
                      className='rounded-md mb-4'
                      src={
                        project.image
                          ? `${baseUrl}/${project.image}`
                          : `${process.env.PUBLIC_URL + "/images/default.png"}`
                      }
                      alt={`Project ${i + 1}`}
                    />
                  </a>
                  <div className='mb-1 flex justify-between items-center border-b pb-2 pr-7'>
                    <h1 className='font-semibold text-lg text-gray-800 dark:text-white'>
                      {project.title}
                    </h1>
                    <div className='flex gap-4 items-center'>
                      {user ? (
                        <>
                          <button
                            className='text-red-700'
                            onClick={() => {
                              dispatch(deleteProject(project._id));
                              reloadPage();
                            }}>
                            Delete
                          </button>
                          <div>
                            <Link to={`/project/edit/${project._id}`}>
                              Edit
                            </Link>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {/* Code Link */}
                      <a
                        href={project.githubSource}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex cursor-pointer items-center text-red-700 dark:text-red-300 hover:text-red-800'>
                        Code
                      </a>
                      {/* Live Link */}
                      <a
                        href={project.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center text-gray-600 dark:text-gray-300 hover:text-red-500'>
                        Live
                      </a>
                    </div>
                  </div>

                  <p className='mb-2 text-xs text-gray-500 dark:text-gray-300'>
                    {project.stack}
                  </p>
                  <p className='mb-4 text-gray-600 dark:text-gray-100'>
                    {project.description}
                  </p>
                  <div className='flex gap-2'>
                    {project.technologies ? (
                      project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className='inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5'>
                          {tech}
                        </span>
                      ))
                    ) : (
                      <h1>technologies</h1>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <ErrorComponent />
        )}
      </>
      {showButton ? (
        <Link to='/projects'>
          <button className='text-gray-700 dark:text-gray-300 text-center w-full focus:outline-none'>
            --- see more ---
          </button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Portfolio;
