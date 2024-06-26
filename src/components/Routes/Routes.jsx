import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Shirt from "../Shirts/Shirt";
import Shoe from "../Shoes/Shoe";
import Watch from "../Watch/Watch";
import Allreports from "../Overallreport/Allreports";
import PendingOrder from "../PendingOrders/PendingOrder";
import { useState } from "react";

export default function AppRoutes({ home }) {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/home" />} />
        </Route>
        <Route path="*/" element={<Home home={home} />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path='/shirt' element={<Shirt />} /> */}
        {/* <Route path='/shoe' element={<Shoe />} /> */}
        {/* <Route path='/watch' element={<Watch />} /> */}

        <Route path="/home">
          <Route index element={<Home home={home} />} />
          <Route path="detail/:code" element={<Allreports home={home} />} />
        </Route>

        <Route path="/shirt">
          <Route index element={<Shirt home={home} />} />
          <Route path="detail/:code" element={<Allreports home={home} />} />
        </Route>

        <Route path="/shoe">
          <Route index element={<Shoe home={home} />} />
          <Route path="detail/:code" element={<Allreports home={home} />} />
        </Route>

        <Route path="/watch">
          <Route index element={<Watch home={home}/>} />
          <Route path="detail/:code" element={<Allreports home={home} />} />
        </Route>

        <Route path="/orders">
          <Route index element={<PendingOrder />} />
          {/* <Route path="orderDetail/" element={<PendingOrder />} /> */}
        </Route>
      </Routes>
      <div></div>
    </>
  );
}
