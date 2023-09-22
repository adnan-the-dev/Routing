import React from 'react'
import "../SharedFile/shared.css"
import { NavLink } from 'react-router-dom'
export default function Home({ home }) {

    return (
        <>

            <div className='imges-section'>

                {home.map((home, i) => {

                    const code = home.name.toLowerCase().replace(' ', '-')

                    return (
                        <React.Fragment key={i}>
                            <NavLink to={`detail/${code}`} style={
                                ({ }) => ({
                                    textDecoration: "none",
                                    color: "#000"
                                })
                            } >
                                <div className='card'>
                                    <div className="imge">
                                        <h2>{home.name}</h2>
                                        <img src={home.img} alt="home" />
                                        <h3>$: {home.price}</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </React.Fragment>
                    )
                }
                )}
            </div>
        </>

    )
}
