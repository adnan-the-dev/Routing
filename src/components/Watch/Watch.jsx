import React from "react";
import "../SharedFile/shared.css";
import { NavLink, useLocation } from "react-router-dom";
export default function Watch({ home }) {
  const location = useLocation();

  const currentPath = location.pathname.substring(1);

  const result = home.filter(({ category }) => category === currentPath);

  return (
    <>
      <div className="imges-section">
        {result.map((watch, i) => {
          const code = watch.name.toLowerCase().split(" ").join("-");
          return (
            <React.Fragment key={i}>
              <NavLink
                to={`detail/${code}`}
                style={
                  ({} = {
                    textDecoration: "none",
                    color: "#000",
                  })
                }
              >
                <div className="card">
                  <div className="imge">
                    <h2>{watch.name}</h2>
                    <img src={watch.img} alt="watches" />
                    <h3>$: {watch.price}</h3>
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
