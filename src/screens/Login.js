import React, { useState } from "react";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../services/userServices";
import { reloadPage } from "../sideCode/side";
import { resetAdmin } from "../redux/slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, Admin } = useSelector((state) => state.adminUser);

  if (user) {
    dispatch(resetAdmin());
    navigate("/");
    reloadPage();
  }

  if (!Admin) {
    reloadPage();
    navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className='container px-auto'>
      <div className='lg:mx-32 lg:pt-12'>
        <Nav />
        <div className='flex justify-center items-center'>
          <button
            onClick={() => {
              dispatch(resetAdmin());
              reloadPage();
            }}
            className='text-red-700 text-center'>
            resetAdmin
          </button>
        </div>
        <div className='flex items-center justify-center pt-8'>
          <form
            onSubmit={handleSubmit}
            className='bg-white p-8 rounded-lg shadow-md w-96'>
            <h2 className='text-2xl font-semibold text-center mb-6 text-gray-800'>
              Login
            </h2>

            {/* Email Input */}
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your email'
                required
              />
            </div>

            {/* Password Input */}
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your password'
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition'>
              Login
            </button>

            {/* Forgot Password Link */}
            <div className='text-center mt-4'>
              <Link href='#' className='text-sm text-blue-500 hover:underline'>
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
