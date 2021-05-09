import React from 'react';
import SignForm from "./SignForm";
import {Link} from "react-router-dom";

function Register() {
    return (
        <SignForm title="Зарегистрироваться" textBtn="Зарегистрироваться">
            <Link className="sign__link" to="/sign-in">
                Уже зарегистрированы? Войти
            </Link>
        </SignForm>
    )
}

export default Register