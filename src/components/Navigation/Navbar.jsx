import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className='bar'>
                <Link to='home'>
                    <button>Home</button>
                </Link>
                <Link to='shirt'>
                    <button>Shirts</button>
                </Link>
                <Link to='shoe'>
                    <button>Shoes</button>
                </Link>
                <Link to='watch'>
                    <button>Watch</button>
                </Link>
            </div>
        </>
    )
}
