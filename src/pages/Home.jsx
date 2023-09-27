import React, {useState} from 'react'
import Modal from '../Modal';

const title = 'HOME'



const Home = () => {
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

export default Home;