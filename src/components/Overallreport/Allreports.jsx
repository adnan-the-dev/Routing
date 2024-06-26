import React, { useState } from "react";
import "./product.css";
import { NavLink, useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
} from "@mui/material";

function Allreports({ home, callBackFunc }) {
  const [count, setCount] = useState(1);

  const param = useParams();
  // const urlCode = param.code.replace('-', ' ')
  const urlCode = param.code.split("-").join(" ");

  const myProduct = home.find(
    (product) => product.name.toLowerCase() === urlCode
  );

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const [arr, setArr] = useState([]);

  localStorage.setItem("arr", JSON.stringify(arr));

  function sedData() {
    const newData = [
      ...arr,

      {
        name: myProduct.name,
        items: count,
        price: myProduct.price * count,
      },
    ];
    setArr(newData);

    setCount(1);
    setShow("");
    alert("Are you sure");
  }

  return (
    <>
      <div className="card-container">
        <div className="card-1">
          <img src={myProduct.img} alt="" />
        </div>
        <div className="card-2">
          <h1>{myProduct.name}</h1>
          <h3>$: {myProduct.price}</h3>

          <h2>Description</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            illo voluptate ea facilis corrupti sunt.
          </p>

          <div className="add-item">
            <div onClick={() => setCount(count > 1 ? count - 1 : count)}>-</div>
            <div>{count}</div>
            <div onClick={() => setCount(count + 1)}>+</div>
          </div>

          <Stack onClick={() => setShow(true)} className="btn" direction="row">
            <Button variant="contained" color="success">
              Add to cart
            </Button>
          </Stack>
        </div>
      </div>

      <Dialog onClose={handleClose} open={show}>
        <div className="pop-up">
          <DialogTitle>
            <h2 style={{ padding: 0, margin: "0" }}>*{myProduct.name}*</h2>
          </DialogTitle>

          <DialogContent
            sx={{ textAlign: "center", margin: "0", padding: "0" }}
          >
            <h2>Total item</h2>
            <h2>({count})</h2>
            <Divider />
            <h2>Total Price</h2>
            <h2> ($: {myProduct.price * count} )</h2>
          </DialogContent>

          <DialogActions sx={{ paddingBottom: "30px" }}>
            <Button
              onClick={() => sedData()}
              variant="contained"
              color="success"
            >
              Place Order
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
}

export default Allreports;
