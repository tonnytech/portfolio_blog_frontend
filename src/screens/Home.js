import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../services/blogServices";
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import Currently from "../components/Currently";
import Tags from "../components/Tags";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Loading from "../components/Loading";
import { fetchProjects } from "../services/projectServices";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
    dispatch(fetchProjects());
  }, [dispatch]);

  const { projects, projectsIsLoading } = useSelector(
    (state) => state.allProjects
  );

  const { blogsIsLoading, blogs } = useSelector((state) => state.allBlogs);

  const displayProjects = projects.filter((project) => project.rating >= 4);
  const showButton = true;
  return (
    <>
      <div className='container px-auto'>
        <div className='lg:mx-32 lg:pt-12'>
          <Nav />
          <Profile />
          {blogsIsLoading ? (
            <Loading />
          ) : (
            <Currently blogs={blogs} blogsIsLoading={blogsIsLoading} />
          )}
          <Tags />
          <Portfolio
            displayProjects={displayProjects}
            projectsIsLoading={projectsIsLoading}
            showButton={showButton}
          />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
