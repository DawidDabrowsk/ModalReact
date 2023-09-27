import React, {useState} from 'react'
import Modal from '../Modal'

const title = 'PAGE 2'

const Page2 = () => {
    const [isModalActive, setIsModalActive] = useState(false)

    const toggleModal = () => {
        setIsModalActive(prev => !prev)
    }

    return (
        <>
        <h1>{title}</h1>
        <button onClick={toggleModal}>Show modal</button>
        {isModalActive ? <Modal title={title}/> : null}
        </>
    )
}

export default Page2 