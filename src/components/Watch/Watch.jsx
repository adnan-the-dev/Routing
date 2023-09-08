import React from 'react'
import "../SharedFile/shared.css"
export default function Watch() {
    const watch = [
        {
            name: "Luxury Watch",
            img: "https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg",
            price: "50"
        },
        {
            name: "Warist Watch",
            img: "https://www.oshi.pk/images/products/stainless-steel-casual-watch-for-man-smart-quartz-watches-for-boys--men-new-fashion-wrist-watch-12298-439.webp",
            price: "50"
        },
        {
            name: "Quartz Watch",
            img: "https://www.shoparena.pk/image/cache/data/IT-WM-BEN-002-800x800.jpg",
            price: "50"
        },
        {
            name: "Puma Watch",
            img: "https://www.watchrepublic.co.za/media/wysiwyg/ep_puma_banner_mobile.jpg",
            price: "50"
        }
    ]
    return (
        <>



            <div className='imges-section'>

                {watch.map((watch, i) => (
                    <div className='card' key={i}>
                        <div className="imge">
                            <h2>{watch.name}</h2>
                            <img src={watch.img} alt="watches" />
                            <h3>$: {watch.price}</h3>
                        </div>
                    </div>

                ))}
            </div>
        </>

    )
}
