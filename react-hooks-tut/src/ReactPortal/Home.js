import React, { useState } from 'react'
import Modal from './Modal';

const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div>
            <h1>Welcome to React Portal</h1>
            <button onClick={() => setIsModalOpen(true)}>
                Open Modal
            </button>
            <Modal isOpen={isModalOpen} >
                <h2>This is a Modal</h2>
                <button onClick={() => setIsModalOpen(false)}>
                    Close Modal
                </button>
            </Modal>



        </div>
    )
}

export default Home
