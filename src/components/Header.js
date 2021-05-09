import React from 'react'
import Logo from "../images/logo.svg";
import {Redirect, useRouteMatch} from 'react-router-dom'

function Header(props) {
    const {path} = useRouteMatch()
    console.log(path)
    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="Логотип место россия"/>
                <div className="header__sign-block">
                    {props.loggedIn && ( <p className="header__text">Катя</p>)}
                    <button className="header__button">Выйти</button>
                </div>
        </header>
    )
}

export default Header