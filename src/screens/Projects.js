import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import { fetchProjects } from "../services/projectServices";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const Projects = () => {
  const dispatch = useDispatch();
  const { projects, projectsIsLoading } = useSelector(
    (state) => state.allProjects
  );

  const displyaProjects = projects;

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <>
      <div className='container mx-auto'>
        <div className='lg:mx-32 lg:mt-12'>
          <Nav />
          {projectsIsLoading ? (
            <Loading />
          ) : (
            <Portfolio displayProjects={displyaProjects} />
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
