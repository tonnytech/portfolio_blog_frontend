import React, { useState } from "react";
import Nav from "../components/Nav";
import { postBlog } from "../services/blogServices";
import { useDispatch } from "react-redux";
import Contact from "../components/Contact";
import { useNavigate } from "react-router";

const NewBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    markdown: "",
    rating: "",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [tagInput, setTagInput] = useState(""); // Separate state for the tag input

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
    }
    setTagInput(""); // Clear input after adding
  };

  const removeTag = (tag) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBlog(formData));

    dispatch(postBlog(formData))
      .unwrap()
      .then((response) => {
        if (response.status === "success") {
          navigate(`/blog/${response.newArticle._id}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='container mx-auto'>
      <div className='lg:mx-32 lg:pt-12'>
        <Nav />
        <div className='px-7 lg:px-0 max-w-2xl mx-auto mt-7 lg:mt-14 text-red-700'>
          <div className='text-center'>
            <h1 className='text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-100'>
              New Blog
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
                htmlFor='description'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={handleChange}
                className='form-control w-full border border-gray-300 rounded-lg p-2'
                name='description'
                id='description'
                rows='4'
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
                htmlFor='markdown'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Markdown
              </label>
              <textarea
                value={formData.markdown}
                onChange={handleChange}
                className='form-control w-full border border-gray-300 rounded-lg p-2'
                name='markdown'
                id='markdown'
                rows='6'
              />
            </div>

            <div className='form-group mb-4'>
              <label
                htmlFor='tags'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Tags
              </label>
              <div className='flex items-center space-x-2'>
                <input
                  type='text'
                  value={tagInput}
                  onChange={handleTagChange}
                  className='form-control w-full border border-gray-300 rounded-lg p-2'
                  placeholder='Add a tag'
                />
                <button
                  type='button'
                  onClick={addTag}
                  className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
                  Add
                </button>
              </div>
              <div className='mt-2'>
                {formData.tags.map((tag, index) => (
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
                Save
              </button>
            </div>
          </form>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default NewBlog;
