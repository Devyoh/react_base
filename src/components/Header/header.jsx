import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logos/logo192.png'

import './header.css'

export default function Header() {
    return (
        <>
            <nav className="header_navbar flex flex-row bg-gray-800 text-gray-100 justify-around p-5 ">
                <img className='h-7' src={logo} alt="logo"/>
                <Link to="/"><h3> Accueil </h3></Link>
                <Link to="/menu"><h3> Nos produits </h3></Link>
                <Link to="/about"><h3> À propos </h3></Link>
                <Link to="/contact"><h3> Nous Contacter </h3></Link>
            </nav>
        </>
    )
}
