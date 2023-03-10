import React, { useState } from 'react'
import './Product.scss'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

export const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    '/img/product/1.jpg',
    '/img/product/2.jpg'
  ]

  return (
    <div className='product'>
      <div className="left">
          <div className="images">
            <img src={images[0]} alt='1' onClick={e=> setSelectedImg(0)}/>
            <img src={images[1]} alt='2' onClick={e=> setSelectedImg(1)}/>
          </div>

          <div className="mainImg">
            <img src={images[selectedImg]} alt='selectedimg'/>
          </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aliquid, facilis omnis. Esse, illum sunt ut eum provident 
          consequatur voluptas dolorum blanditiis veniam rerum dolores 
          beatae accusantium temporibus! Quasi, quis. Consequuntur!
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev)=> prev === 1 ? 1 : prev - 1  )}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev)=> prev+1)}>+</button>
        </div>
        <button className='add'> <AddShoppingCartIcon/> ADD TO CART</button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> 
            ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/>
            ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>

        <hr />
        
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
           <span>FAQ</span>
        </div>

      </div>

    </div>
  )
}

export default Product
