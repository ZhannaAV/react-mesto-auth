import React from 'react'

function InfoTooltip(){
return(
    <div className={`popup`}>
        <img src="" alt=""/>
        <p className="popup__text"></p>
        <button onClick={props.onClose} className="popup__close" type="button"
                aria-label="закрыть окно"></button>
    </div>
)
}

export default InfoTooltip