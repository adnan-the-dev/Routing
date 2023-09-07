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
        }
    ]
    return (
        <>
            <div className='imges-section'>

                {shoe.map((shoe, i) => (
                    <div className='card' key={i}>
                        <div className="imge">
                            <h2>{shoe.name}</h2>
                            <img src={shoe.img} alt="house" />
                            <h3>$: {shoe.price}</h3>
                        </div>
                    </div>

                ))}
            </div>

            {/* <div className='imges-section'>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="https://rukminim2.flixcart.com/image/850/1000/l3nco7k0/shoe/p/u/c/6-71-dunkaston-white-original-imageq6xjjpfyrvw.jpeg?q=20" alt="" />
                    <h3>price:</h3>

                </div>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="" alt="" />
                    <h3>price:</h3>

                </div>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                    <h3>price:</h3>

                </div>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="https://cdn.thewirecutter.com/wp-content/media/2023/08/watershoes-2048px-1243-2.jpg" alt="" />
                    <h3>price:</h3>

                </div>
            </div>


            <div className='imges-section'>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="" alt="" />
                    <h3>price:</h3>

                </div>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2_dYo0CIrNrWaZpCDzNm2ISfC8_oWkIOGkirbeHnEf4svAWpATvGgSnAOveG_RA64cg&usqp=CAU" alt="" />
                    <h3>price:</h3>

                </div>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15778982/2021/10/25/705a529a-97a1-4b60-bdf2-64bab0d151031635184404737ProvogueMenBlackSolidFormalDebys1.jpg" alt="" />
                    <h3>price:</h3>

                </div>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvBaqxhv2fdOOzWqSDvRsAQaTyhunts2NzA&usqp=CAU" alt="" />
                    <h3>price:</h3>

                </div>
            </div> */}
        </>

    )
}
