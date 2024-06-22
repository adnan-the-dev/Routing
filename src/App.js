import "./App.css";
import AppRoutes from "./components/Routes/Routes";
import Navbar from "./components/Navigation/Navbar";
import Allreports from "./components/Overallreport/Allreports";

function App() {
  const home = [
    {
      name: "T shirt",
      img: "https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1639424924/D22010-336-0026-M04/g-star-raw-side-license-graphic-t-shirt-dark-blue.jpg",
      price: "60",
      category: "shirt",
    },
    {
      name: "Sanaker",
      img: "https://rukminim2.flixcart.com/image/850/1000/l3nco7k0/shoe/p/u/c/6-71-dunkaston-white-original-imageq6xjjpfyrvw.jpeg?q=20",
      price: "23",
      category: "shoe",
    },
    {
      name: "Sport Shoes",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      price: "45",
      category: "shoe",
    },
    {
      name: "Luxury Watch",
      img: "https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg",
      price: "50",
      category: "watch",
    },
    {
      name: "Warist Watch",
      img: "https://www.oshi.pk/images/products/stainless-steel-casual-watch-for-man-smart-quartz-watches-for-boys--men-new-fashion-wrist-watch-12298-439.webp",
      price: "50",
      category: "watch",
    },
    {
      name: "Plain White",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGwe8Los-h8rp5F--gYdcnEgpjTEZnNSllk2vIjUK1Xd3ggz0R5HxNwxoLl1hNi_OQ_g&usqp=CAU",
      price: "70",
      category: "shirt",
    },
    {
      name: "Running Shoes",
      img: "https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_ORG-BLK_38e29fbc-1e98-4f87-97a4-289935e5a82d.jpg?v=1670326504",
      price: "50",
      category: "shoe",
    },
    {
      name: "Puma Watch",
      img: "https://www.watchrepublic.co.za/media/wysiwyg/ep_puma_banner_mobile.jpg",
      price: "50",
      category: "watch",
    },
    {
      name: "T shirt JULKE",
      img: "https://image.made-in-china.com/2f0j00YTWcJPMEhmkz/Guangzhou-Factory-Customized-Logo-Soft-Comfortable-Design-Colorful-Fashion-Man-Polo-T-Shirt.webp",
      price: "70",
      category: "shirt",
    },
    {
      name: "Quartz Watch",
      img: "https://www.shoparena.pk/image/cache/data/IT-WM-BEN-002-800x800.jpg",
      price: "50",
      category: "watch",
    },
    {
      name: "Braker Shoes",
      img: "https://row.barkershoes.com/cdn/shop/collections/c9de6e9bd9195ba8b4ce02dcc7138b6a_600x375_crop_center.jpg?v=1632492625",
      price: "50",
      category: "shoe",
    },
    {
      name: "Checkered Shirt",
      img: "https://outfitters.com.pk/cdn/shop/files/F0362103415_2.jpg?v=1688382841",
      price: "90",
      category: "shirt",
    },
  ];

  const res = Object.values(
    home.reduce(
      (acc, curr) => (
        (acc[curr.category] = acc[curr.category] || []).push(curr), acc
      ),
      {}
    )
  );

  // let newArray = {};

  // home.map((item, index) => {
  //   console.log(item.category ? "shirt" : "", "hello");
  // })

  // home.map(x => newArray[x.category] = 1 + (newArray[x.category] || 0))

  // console.log(newArray, "hello");

  // localStorage.setItem("main_array", JSON.stringify(home))

  // let fromLS = localStorage.getItem('main_array')

  // console.log(JSON.parse(fromLS), 'hsdjkhsgjk');

  return (
    <>
      <div>
        <Navbar />
        <AppRoutes home={home} />
      </div>
    </>
  );
}

export default App;
