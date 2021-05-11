import React from 'react'
import Logo from "../images/logo.svg";
import {Link, useLocation} from 'react-router-dom'
import {SignContext} from "../contexts/SignContext"

function Header() {
    const logContext = React.useContext(SignContext)
    const {loggedIn, setLoggedIn, emailSign} = logContext
    const {pathname} = useLocation()
    const signSwitch = () => {
        switch (pathname) {
            case '/sign-up':
                return {
                    to: "/sign-in",
                    title: "Войти"
                }
            default:
                return {
                    to: "/sign-up",
                    title: "Регистрация"
                }
        }
    }

    function handleUnlogged() {
        setLoggedIn(false)
    }

    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="Логотип место россия"/>
            <div className="header__sign-block">
                {loggedIn && (<p className="header__text">{emailSign}</p>)}
                {loggedIn && <button className="header__button" onClick={handleUnlogged}>Выйти</button>}
                {!loggedIn &&
                <Link to={signSwitch().to}>
                    <button className="header__button header__button_unlogged">{signSwitch().title}</button>
                </Link>
                }
            </div>
        </header>
    )
}

export default Header


/*    const signUp = {
        to: "/sign-up",
        title: "Регистрация"
    }
    const signIn = {
        to: "/sign-in",
        title: "Войти"
    }
    //устанавливает находится ли юзер на странице входа
    const [isSignIn, setIsSignIn] = React.useState(true)

    //переключает значение при переключении между страницей регистрации и входа
    function handleUseRouteMatch() {
        setIsSignIn(!isSignIn)
    }*/

//устанавливает, что юзер не авторизован при клике на кнопку выхода