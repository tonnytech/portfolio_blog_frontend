import React from "react";
import Nav from "../components/Nav";
import BlogHero from "../components/BlogHero";

const Blog = () => {
  return (
    <div className='container mx-auto'>
      <div className='lg:mx-32 lg:pt-12'>
        <Nav />
        <BlogHero />
      </div>
    </div>
  );
};

export default Blog;
