import React from 'react'
import okIcon from '../images/ok.svg'
import notOkIcon from '../images/not-ok.svg'

function InfoTooltip(props) {
    const {isOpen, onClose} = props
    const tips = {
        ok:{
            icon: okIcon,
            title:'Вы успешно зарегистрировались'
        },
        notOk:{
            icon: notOkIcon,
            title: 'Что-то пошло не так!Попробуйте ещё раз.'
        }
    }
    return (
        <div className={`popup ${isOpen && 'popup_opened'}`}>
            <div className="popup__window">
                <img className="popup__icon" src={tips.notOk.icon} alt="галочка"/>
                <h2 className="popup__title">{tips.notOk.title}</h2>
                <button onClick={onClose} className="popup__close" type="button"
                        aria-label="закрыть окно"></button>
            </div>
        </div>
    )
}

export default InfoTooltip