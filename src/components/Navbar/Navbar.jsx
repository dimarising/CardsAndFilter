import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='wrapper'>
          <div className='left'>
            <div className="item">
              <img src='/img/en.png'></img>
              <KeyboardArrowDownIcon/>
            </div>
          </div>
          <div className='center'></div>
          <div className='right'></div>
        </div>
    </div>
   
  )
}

export default Navbar