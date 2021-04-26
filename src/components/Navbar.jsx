import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <h1 className='ml-1'>Booklist</h1>
                <div className='mr-1'>
                    <ul>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
