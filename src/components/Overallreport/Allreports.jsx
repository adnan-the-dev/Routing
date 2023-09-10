import React, { useState } from 'react'
import './product.css'
import { useParams } from 'react-router-dom'

function Allreports({ home }) {
  const [count, setCount] = useState(1)

  const param = useParams()
  // console.log(param,'param');
  const urlCode = param.code.replace('-', ' ')



  const myProduct = home.find((product) => (product.name.toLowerCase() === urlCode))

  // console.log(myProduct, 'myProduct');


  return (
    <>
      <div className='card-container'>
        <div className='card-1'>
          <img src={myProduct.img} alt="" />
        </div>
        <div className='card-2'>
          <h1>{myProduct.name}</h1>
          <h3>$: {myProduct.price}</h3>

          <h2>Description</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, illo voluptate ea facilis corrupti sunt.

          </p>

          <div className='add-item'>
            <div onClick={() => setCount(count - 1)}>-</div>
            <div>{count}</div>
            <div onClick={() => setCount(count + 1)} >+</div>
          </div>
          <div className='btn'>
            <button>Add to cart </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Allreports