import React from 'react'
import Logo from "../images/logo.svg";
import {Link} from 'react-router-dom'
import {SignContext} from "../contexts/SignContext";

function Header() {
    const logContext = React.useContext(SignContext)
    const {loggedIn, handleLogged} = logContext
    const signup = {
        to: "/sign-up",
        title: "Регистрация"
    }
    const signin = {
        to: "/sign-in",
        title: "Войти"
    }
    const [isSignIn, setIsSignIn] = React.useState(false)

    function handleUseRouteMatch(){
        setIsSignIn(!isSignIn)
    }

    function handleUnlogged() {
        handleLogged(false)
    }


    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="Логотип место россия"/>
            <div className="header__sign-block">
                {loggedIn && (<p className="header__text">{localStorage.getItem('user')}</p>)}
                {loggedIn && <button className="header__button" onClick={handleUnlogged}>Выйти</button>}
                {!loggedIn &&
                <Link to={isSignIn ? signup.to : signin.to}>
                    <button className="header__button header__button_unlogged" onClick={handleUseRouteMatch} >{isSignIn ? signup.title : signin.title}</button>
                </Link>
                }
            </div>
        </header>
    )
}

export default Header