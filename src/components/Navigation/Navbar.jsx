import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div>
                    <h2>LOGOBAKERY</h2>
                </div>
                <div class="tags">
                    <Link to='home'>
                        <li><button>Home</button></li>
                    </Link>
                    <Link to='shirt'>
                        <li><button>Shirts</button></li>
                    </Link>
                    <Link to='shoe'>
                        <li><button>Shoes</button></li>

                    </Link>
                    <Link to='watch'>
                        <li><button>Watches</button></li>
                    </Link>

                </div>
            </div>




            {/* <div class="navbar">
                <div>
                    <h2>LOGOBAKERY</h2>
                </div>
                <div class="tags">
                    <li><button>Home</button></li>
                    <li><button>Shirts</button></li>
                    <li><button>Shoes</button></li>
                    <li><button>Watch</button></li>
                </div>
            </div> */}
        </>
    )
}
