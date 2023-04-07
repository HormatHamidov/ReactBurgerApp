import React from 'react'
import Logo from '/public/logo.png'
import { Link } from 'react-router-dom'
import '../../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="main">
                <img src={Logo} alt="" />

                <div className="nav__links">
                    <Link to="/">
                        Ana Sehife
                    </Link>
                    <Link to="/menu">
                        Menu
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar