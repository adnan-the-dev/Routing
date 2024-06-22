import React from "react";
import "../SharedFile/shared.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Shoe({ home }) {
  const location = useLocation();

  const currentPath = location.pathname.substring(1);

  const result = home.filter(({ category }) => category === currentPath);

  return (
    <>
      <div className="imges-section">
        {result.map((shoe, i) => {
          const code = shoe.name.toLowerCase().split(" ").join("-");
          return (
            <React.Fragment key={i}>
              <NavLink
                to={`detail/${code}`}
                style={({}) => ({
                  textDecoration: "none",
                  color: "#000",
                })}
              >
                <div className="card">
                  <div className="imge">
                    <h2>{shoe.name}</h2>
                    <img src={shoe.img} alt="shoes" />
                    <h3>$: {shoe.price}</h3>
                  </div>
                </div>
              </NavLink>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
