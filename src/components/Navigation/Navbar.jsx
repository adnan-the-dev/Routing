import React from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const nav = ['home', 'shoe', 'shirt', 'watch', "orders"]
    return (
        <>
            <div className='navbar'>
                <div>
                    <h2>LOGOBAKERY</h2>
                </div>
                <div className="tags">

                    {nav.map((item, i) => (
                        <NavLink key={i}
                            to={item}
                            style={
                                ({ isActive }) => ({
                                    textDecoration: "none",
                                    backgroundColor: isActive ? "#79B5D9" : "",
                                    color: 'white',
                                    padding: '10px 20px',
                                    fontSize: "16px",
                                    border: '1px solid #fff',
                                    borderRadius: '20px'
                                })

                            }
                        >
                            {item}

                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}
