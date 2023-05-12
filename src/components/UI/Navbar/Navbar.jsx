import React , { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";


const Navbar = () => {

    const navigate = useNavigate();
    const goLogin = () => navigate('/login')
    const { isAuth, setIsAuth } = useContext(AuthContext);


    return (
        <div className="navbar">
            <MyButton onClick={goLogin}>
                Логин
            </MyButton>
            <MyButton onClick={() => setIsAuth(false)}>
                Выйти
            </MyButton>
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
