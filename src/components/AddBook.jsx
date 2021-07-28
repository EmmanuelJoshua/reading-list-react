import React from 'react'
import { Plus } from 'react-feather'

const AddBook = ({ openModal }) => {
    return (
        <div className='bookdetails-add' onClick={() => openModal()}>
            <Plus className='add-icon' />
            <h2>Add book</h2>
        </div>
    );
}

export default AddBook;