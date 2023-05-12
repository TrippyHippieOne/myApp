import React, { useState, useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context";
import "./styles/App.css";

function App() {
    const [isAuth, setIsAuth] = useState(false)


    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
