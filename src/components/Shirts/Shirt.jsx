import React from "react";
import "../SharedFile/shared.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Shirt({ home }) {
  const location = useLocation();

  const currentPath = location.pathname.substring(1);

  const result = home.filter(({ category }) => category === currentPath);
  return (
    <>
      <div className="imges-section">
        {result.map((shirt, i) => {
          const code = shirt.name.toLowerCase().split(" ").join("-");

          return (
            <React.Fragment key={i}>
              <NavLink
                to={`detail/${code}`}
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <div className="card">
                  <div className="imge">
                    <h2>{shirt.name}</h2>
                    <img src={shirt.img} alt="shirts" />
                    <h3>$: {shirt.price}</h3>
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
