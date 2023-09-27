import React from 'react'
import './Modal.css'


const Modal = (props) => {
    return (
        <div className='modal'>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Modal