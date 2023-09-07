import React from 'react'
// import "../SharedFile/shared.css"

export default function Shirt() {

    const shirts = [
        {
            name: 'Check Blue',
            img: 'https://outfitters.com.pk/cdn/shop/files/F0362103415_2.jpg?v=1688382841',
            price: '90'
        },
        {
            name: 'Check Blue',
            img: 'https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1639424924/D22010-336-0026-M04/g-star-raw-side-license-graphic-t-shirt-dark-blue.jpg',
            price: '60'
        }
        , {
            name: 'Plain White',
            img: 'https://image.made-in-china.com/2f0j00YTWcJPMEhmkz/Guangzhou-Factory-Customized-Logo-Soft-Comfortable-Design-Colorful-Fashion-Man-Polo-T-Shirt.webp',
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
                            <img src={shirt.img} alt="house" />
                            <h3>$: {shirt.price}</h3>
                        </div>
                    </div>

                ))}
                {/* <div class="imge">
                    <h2>Name:</h2>
                    <img src="" alt="" />
                    <h3>price:</h3>

                </div>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="" alt="" />
                    <h3>price:</h3>

                </div>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="https://image.made-in-china.com/202f0j00FEgqRceCMmkA/China-Guangzhou-Factory-Customized-fashion-Color-Fashion-Man-Polo-Shirt.jpg" alt="" />
                    <h3>price:</h3>

                </div> */}
            </div>


            <div className='imges-section'>
                {/* <div class="imge">
                    <h2>Name:</h2>
                    <img src="https://img.freepik.com/premium-photo/blank-polo-t-shirt-men-template-white-color-with-light-background_800563-3717.jpg" alt="" />
                    <h3>price:</h3>

                </div>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="https://i.ebayimg.com/images/g/3lYAAOSwl9FjBTP1/s-l1600.jpg" alt="" />
                    <h3>price:</h3>

                </div>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="https://i.ebayimg.com/images/g/lBgAAOSwyOpkEj~N/s-l400.jpg" alt="" />
                    <h3>price:</h3>

                </div>
                <div class="imge">
                    <h2>Name:</h2>
                    <img src="https://img.freepik.com/premium-vector/white-t-shirt-with-dragon-it-is-displayed-black-background_712895-1272.jpg" alt="" />
                    <h3>price:</h3>

                </div> */}
            </div>
        </>
    )
}
