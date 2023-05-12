import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";


const AppRouter = () => {
    const { isAuth } = useContext(AuthContext);
    return !isAuth ? (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    ) : (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default AppRouter;
