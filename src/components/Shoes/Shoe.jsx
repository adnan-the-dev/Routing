import React from 'react'
import "../SharedFile/shared.css"

export default function Shoe() {

    const shoe = [
        {
            name: "Sanaker",
            img: "https://rukminim2.flixcart.com/image/850/1000/l3nco7k0/shoe/p/u/c/6-71-dunkaston-white-original-imageq6xjjpfyrvw.jpeg?q=20",
            price: "23"
        },
        {
            name: "Sport Shoes",
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            price: "45"
        },
        {
            name: "Braker Shoes",
            img: "https://row.barkershoes.com/cdn/shop/collections/c9de6e9bd9195ba8b4ce02dcc7138b6a_600x375_crop_center.jpg?v=1632492625",
            price: "50"
        },
        {
            name: "Running Shoes",
            img: "https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_ORG-BLK_38e29fbc-1e98-4f87-97a4-289935e5a82d.jpg?v=1670326504",
            price: "50"
        }
    ]
    return (
        <>
            <div className='imges-section'>

                {shoe.map((shoe, i) => (
                    <div className='card' key={i}>
                        <div className="imge">
                            <h2>{shoe.name}</h2>
                            <img src={shoe.img} alt="shoes" />
                            <h3>$: {shoe.price}</h3>
                        </div>
                    </div>

                ))}
            </div>



            {/* 
            <div className="container">
                {
                    shoe.map((shoe, i) => (
                        <div className="card" key={i}>
                            <div className="imagbox">
                                <img src={shoe.img} alt="" />
                            </div>
                            <div className="content">
                                <h2>{shoe.name}</h2>
                                <p>$:{shoe.price}</p>
                            </div>

                        </div>
                    ))
                }

            </div> */}
        </>

    )
}
