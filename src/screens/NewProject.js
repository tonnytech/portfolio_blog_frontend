import React, { useState } from "react";
import Nav from "../components/Nav";
import { postProject } from "../services/projectServices";
import { useDispatch } from "react-redux";
import Contact from "../components/Contact";
import { useNavigate } from "react-router";

const NewProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    rating: "",
    image: "",
    description: "",
    stack: "",
    githubSource: "",
    dockerSource: "",
    live: "",
    technologies: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [technologyInput, setTechnologyInput] = useState(""); // Separate state for the tag input
  console.log(technologyInput);
  console.log(formData.technologies);

  const handleTagChange = (e) => {
    setTechnologyInput(e.target.value);
  };

  const addTag = () => {
    if (
      technologyInput.trim() &&
      !formData.technologies.includes(technologyInput.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, technologyInput.trim()],
      }));
      console.log(formData.technologies);
    }

    setTechnologyInput(""); // Clear input after adding
  };

  const removeTag = (tag) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== tag),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const projectsFormData = new FormData();
    if (formData.title) projectsFormData.append("title", formData.title);
    if (formData.rating) projectsFormData.append("rating", formData.rating);
    if (formData.stack) projectsFormData.append("stack", formData.stack);
    if (formData.technologies)
      projectsFormData.append(
        "technologies",
        JSON.stringify(formData.technologies)
      );
    if (formData.description)
      projectsFormData.append("description", formData.description);
    if (formData.githubSource)
      projectsFormData.append("githubSource", formData.githubSource);
    if (formData.dockerSource)
      projectsFormData.append("dockerSource", formData.dockerSource);
    if (formData.live) projectsFormData.append("live", formData.live);
    if (selectedFile) projectsFormData.append("image", selectedFile);

    dispatch(postProject(projectsFormData))
      .unwrap()
      .then((response) => {
        if (response.status === "success") {
          navigate("/projects");
        }
      })
      .catch((error) => {
        console.error(error);
        console.log("Oops! something went wrong. Try again");
      });
  };
  return (
    <div className='container mx-auto'>
      <div className='lg:mx-32 lg:pt-12'>
        <Nav />
        <div className='px-7 lg:px-0 max-w-2xl mx-auto mt-7 lg:mt-14 text-red-700'>
          <div className='text-center'>
            <h1 className='text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-100'>
              New project
            </h1>
          </div>
          <form onSubmit={handleSubmit} className='max-w-xl mx-auto p-4'>
            <div className='form-group mb-4'>
              <label
                htmlFor='title'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Title
              </label>
              <input
                required
                value={formData.title}
                onChange={handleChange}
                className='form-control w-full border border-gray-300 rounded-lg p-2'
                type='text'
                name='title'
                id='title'
              />
            </div>

            <div className='form-group mb-4'>
              <label
                htmlFor='image'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Image
              </label>
              <input
                required
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className='form-control w-full border border-gray-300 rounded-lg p-2'
                type='file'
              />
            </div>

            <div className='form-group mb-4'>
              <label
                htmlFor='description'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Description
              </label>
              <input
                value={formData.description}
                onChange={handleChange}
                className='form-control w-full border border-gray-300 rounded-lg p-2'
                name='description'
                id='description'
                type='text'
                maxLength={30}
              />
            </div>

            <div className='form-group mb-4'>
              <label
                htmlFor='rating'
                className='block text-sm font-medium text-gray-700 mb-2'>
                rating
              </label>
              <input
                required
                value={formData.rating}
                onChange={handleChange}
                className='form-control w-full border border-gray-300 rounded-lg p-2'
                name='rating'
                id='rating'
                type='number'
              />
            </div>

            <div className='form-group mb-4'>
              <label
                htmlFor='stack'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Stack
              </label>
              <input
                type='text'
                value={formData.stack}
                onChange={handleChange}
                className='form-control w-full border border-gray-300 rounded-lg p-2'
                name='stack'
                id='stack'
              />
            </div>

            <div className='form-group mb-4'>
              <label
                htmlFor='githubSource'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Github Source
              </label>
              <input
                value={formData.githubSource}
                onChange={handleChange}
                className='form-control w-full border border-gray-300 rounded-lg p-2'
                name='githubSource'
                id='githubSource'
                type='text'
              />
            </div>

            <div className='form-group mb-4'>
              <label
                htmlFor='githubSource'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Docker Source
              </label>
              <input
                value={formData.dockerSource}
                onChange={handleChange}
                className='form-control w-full border border-gray-300 rounded-lg p-2'
                name='dockerSource'
                id='dockerSource'
                type='text'
              />
            </div>

            <div className='form-group mb-4'>
              <label
                htmlFor='live'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Live
              </label>
              <input
                value={formData.live}
                onChange={handleChange}
                className='form-control w-full border border-gray-300 rounded-lg p-2'
                name='live'
                id='live'
                type='text'
              />
            </div>

            <div className='form-group mb-4'>
              <label
                htmlFor='technologies'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Technologies
              </label>
              <div className='flex items-center space-x-2'>
                <input
                  type='text'
                  value={technologyInput}
                  onChange={handleTagChange}
                  className='form-control w-full border border-gray-300 rounded-lg p-2'
                  placeholder='Add a technology'
                />
                <button
                  type='button'
                  onClick={addTag}
                  className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
                  Add
                </button>
              </div>
              <div className='mt-2'>
                {formData.technologies.map((tag, index) => (
                  <span
                    key={index}
                    className='inline-flex items-center bg-gray-200 text-sm font-medium text-gray-700 px-3 py-1 rounded-full mr-2 mt-2'>
                    {tag}
                    <button
                      type='button'
                      onClick={() => removeTag(tag)}
                      className='ml-2 text-gray-500 hover:text-red-600'>
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <a
                href='/'
                className='btn-secondary text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100'>
                Cancel
              </a>
              <button
                type='submit'
                className='btn-primary mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default NewProject;
