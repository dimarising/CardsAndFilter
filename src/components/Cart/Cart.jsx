import '../Cart/Cart.scss'

import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Curt = () => {

  const data = [
    {
        id: 1,
        img: "../img/clothes/pexels-engin-akyurt-1642228.jpg",
        desc: "Graphic T-shorts", 
        title: "Long Sleeve Graphic T-shorts",
        isNew: true,
        oldPrice: 19,
        newPrice: 12,
    },
    {
      id: 2,
      img: "../img/clothes/pexels-evg-kowalievska-1055691.jpg",
      title: "Long Sleeve Graphic T-shorts",
      desc: "Graphic T-shorts", 
      isNew: true,
      oldPrice: 20,
      newPrice: 15,
    }
  ];

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
       {data?.map(item=>(
        <div className="item" key={item.id}>
          <img src={item.img} alt="miniImg" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x {item.newPrice}</div>
          </div>
          <DeleteOutlineIcon className='delete'/>
        </div>
       ))}

       <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
       </div>
       <button>PROCEED TO CHECKOUT</button>
       <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Curt


