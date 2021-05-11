import React from 'react'
import okIcon from '../images/ok.svg'
import notOkIcon from '../images/not-ok.svg'

function InfoTooltip(props) {
    const {isOpen, onClose, status} = props

    return (
        <div className={`popup ${isOpen && 'popup_opened'}`}>
            <div className="popup__window">
                <img className="popup__icon" src={status ? okIcon : notOkIcon} alt="галочка"/>
                <h2 className="popup__title">{status ? "Вы успешно зарегистрировались" : "Что-то пошло не так!Попробуйте ещё раз."}</h2>
                <button onClick={onClose} className="popup__close" type="button"
                        aria-label="закрыть окно"/>
            </div>
        </div>
    )
}

export default InfoTooltip