import React from 'react'
import "../SharedFile/shared.css"

export default function Shirt() {

    const shirts = [
        {
            name: 'Checkered Shirt',
            img: 'https://outfitters.com.pk/cdn/shop/files/F0362103415_2.jpg?v=1688382841',
            price: '90'
        },
        {
            name: 'T shirt',
            img: 'https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1639424924/D22010-336-0026-M04/g-star-raw-side-license-graphic-t-shirt-dark-blue.jpg',
            price: '60'
        }
        , {
            name: 'T shirt JULKE',
            img: 'https://image.made-in-china.com/2f0j00YTWcJPMEhmkz/Guangzhou-Factory-Customized-Logo-Soft-Comfortable-Design-Colorful-Fashion-Man-Polo-T-Shirt.webp',
            price: '70'
        },
        {
            name: 'Plain White',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGwe8Los-h8rp5F--gYdcnEgpjTEZnNSllk2vIjUK1Xd3ggz0R5HxNwxoLl1hNi_OQ_g&usqp=CAU',
            price: '70'
        },
        {
            name: 'Plain White',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGwe8Los-h8rp5F--gYdcnEgpjTEZnNSllk2vIjUK1Xd3ggz0R5HxNwxoLl1hNi_OQ_g&usqp=CAU',
            price: '70'
        },
        {
            name: 'Plain White',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGwe8Los-h8rp5F--gYdcnEgpjTEZnNSllk2vIjUK1Xd3ggz0R5HxNwxoLl1hNi_OQ_g&usqp=CAU',
            price: '70'
        }
    ]
    return (
        <>
            <div className='imges-section'>

                {shirts.map((shirt, i) => (
                    <div className='card' key={i}>
                        <div className="imge">
                            <h2>{shirt.name}</h2>
                            <img src={shirt.img} alt="shirts" />
                            <h3>$: {shirt.price}</h3>
                        </div>
                    </div>

                ))}
            </div>

        </>
    )
}
