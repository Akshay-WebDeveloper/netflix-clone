import React, { useState, useEffect } from 'react'
import './Navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else { handleShow(false); }
        });

        return () => {
            window.removeEventListener("scroll");
            console.log("scroll removed");
        }

    }, [])


    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix-logo" />

            <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="nav_avatar" />
        </div>
    )
}

export default Navbar