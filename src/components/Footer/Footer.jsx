import React from 'react'
import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessorries</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolore consequuntur, in repellat incidunt laudantium, sed distinctio veniam,
            harum maiores voluptatum totam natus illo. Sit eum nam repudiandae itaque, ut cumque.
          </span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, 
            voluptates blanditiis quisquam eaque iusto accusamus fugiat soluta harum 
            natus, neque dolorum impedit enim. Quam incidunt in nisi enim quasi officiis.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Store</span>
          <span className="copyright">Copyright 2023. All Rights Reserved </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>  
    </div>
  )
}

export default Footer