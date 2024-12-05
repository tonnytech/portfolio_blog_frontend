import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAdmin } from "../services/userServices";
import { setAdmin, logoutUser } from "../redux/slices/userSlice";

const Contact = () => {
  const dispatch = useDispatch();

  const { Admin, user } = useSelector((state) => state.adminUser);

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(checkAdmin({ admin: inputValue }))
      .unwrap()
      .then((response) => {
        if (response.status === "success") {
          dispatch(setAdmin());
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (Admin) {
      navigate("/login");
    }
  }, [Admin, navigate]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const handleIsAdmin = () => {
    setIsAdmin(true);
  };

  return (
    <div className='pb-16 px-4 md:px-0' id='contact'>
      <div className='flex justify-between'>
        <div className='border-l-4 border-red-500 pl-6 dark:text-gray-200 py-2 text-sm'>
          <a className='block mb-2' href='https://github.com/tonnytech'>
            github.com/tonnytech
          </a>
          <a className='block mb-2' href='https://linkedin.com/in/tonnytei'>
            linkedin.com/in/tonnytei
          </a>
          <a className='block' href='mailto:tonnytei4@gmail.com'>
            tonnytei4@gmail.com
          </a>
        </div>

        {user ? (
          <button className='text-red-500' onClick={handleLogout}>
            logout
          </button>
        ) : (
          <div className='flex'>
            <form
              onSubmit={handleSubmit}
              className={`text-red-500 ${isAdmin ? "block" : "hidden"}`}>
              <label htmlFor='simple-input' className=''></label>
              <input
                type='password'
                id='simple-input'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className=''
                placeholder='Type here...'
                required
              />
              <button type='submit' className='p-2 text-red-500'>
                Submit
              </button>
            </form>
            <button
              className={`text-red-500 ${isAdmin ? "hidden" : "block"}`}
              onClick={handleIsAdmin}>
              isAdm?
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
