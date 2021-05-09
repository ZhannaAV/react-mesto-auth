import React from 'react';

function SignForm(props){
   const {textBtn, children, title} = props
    return(
        <section className="sign">
            <h2 className="sign__title">{title}</h2>
        <form className="sign__form" name="form-sign-up">
            <fieldset className="sign__field">
                <input id="sign-email" className="sign__input sign__input_type_email" type="email"
                       name="email"
                       placeholder="Email"
                       required /*onChange={handleChangeName} value={email}*//>
                <span className="sign__input-error sign-email-error"></span>
                <input id="sign-password" className="sign__input sign__input_type_password" type="password"
                       name="password"
                       placeholder="Пароль"
                       required /*onChange={handleChangeName} value={password}*//>
                <span className="sign__input-error sign-password-error"></span>
            </fieldset>
            <button className="sign__button">{textBtn}</button>
        </form>
            {children}
        </section>
    )
}
export default SignForm