import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import Projects from "./screens/Projects";
import Show from "./screens/Show";
import Login from "./screens/Login";
import NewBlog from "./screens/NewBlog";
import EditBlog from "./screens/EditBlog";
import ProtectedRoute from "./sideCode/ProtectedRouter";
import ProtectedLoginRouter from "./sideCode/ProtectLoginRouter";
import NewProject from "./screens/NewProject";
import EditProject from "./screens/EditProject";

function App() {
  return (
    <div className='dark:bg-gray-900 mb-0'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<Show />} />
        <Route
          path='/blog/edit/:id'
          element={
            <ProtectedRoute>
              <EditBlog />
            </ProtectedRoute>
          }
        />
        {/* <Route path='/blog/edit/:id' element={<EditBlog />} /> */}
        <Route path='/projects' element={<Projects />} />
        <Route
          path='/project/edit/:id'
          element={
            <ProtectedRoute>
              <EditProject />
            </ProtectedRoute>
          }
        />
        <Route
          path='/newblog'
          element={
            <ProtectedRoute>
              <NewBlog />
            </ProtectedRoute>
          }
        />
        <Route
          path='/newproject'
          element={
            <ProtectedRoute>
              <NewProject />
            </ProtectedRoute>
          }
        />
        <Route
          path='/login'
          element={
            <ProtectedLoginRouter>
              <Login />
            </ProtectedLoginRouter>
          }
        />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
