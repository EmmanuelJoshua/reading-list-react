import React, { useState, useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { UserContext } from '../contexts/UserContext';
import { User } from 'react-feather'
import ReactDOM from 'react-dom';

const SetUsernameModal = () => {

    const { showSetUserModal, setUser, userModalDispatch } = useContext(UserContext);
    const [username, setUsername] = useState('');

    const closeModal = () => {
        userModalDispatch({ type: 'CLOSE_MODAL' })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(username);
        setUsername('');
        closeModal();
    }

    return ReactDOM.createPortal(
        <CSSTransition
            in={showSetUserModal}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className='modal'>
                <div className='modal-content user-modal' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <div className='book'>
                            <User className='book-icon' />
                        </div>
                        <h4 className='modal-title'>Add your name</h4>
                    </div>

                    <div className='modal-body'>
                        <form id='modal-form' onSubmit={handleSubmit}>
                            <input type='text' placeholder='Your first name' value={username}
                                onChange={(e) => setUsername(e.target.value)} required className='modal-input' />
                        </form>
                    </div>

                    <div className='modal-footer'>
                        <input form='modal-form' type='submit' value='Submit' className='modal-submit' />
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById('root')
    )
}

export default SetUsernameModal;