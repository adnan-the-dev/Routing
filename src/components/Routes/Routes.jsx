import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Shirt from "../Shirts/Shirt";
import Shoe from "../Shoes/Shoe";
import Watch from "../Watch/Watch";

export default function AppRoutes() {
    return (
        <>

            <Routes>


                <Route path="/">
                    <Route
                        index
                        element={
                            <Navigate
                                to="/home"
                            />
                        }
                    />
                </Route>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path='/shirt' element={<Shirt />} />
                <Route path='/shoe' element={<Shoe />} />
                <Route path='/watch' element={<Watch />} />
            </Routes>
            <div>
            </div>
        </>
    )
}
