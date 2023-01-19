import React from 'react'
import './Categories.scss'
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="/img/categories/forSale.jpg" alt="sale" />
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src="/img/categories/women.jpg" alt="women" />
                <button>
                    <Link className='link' to='/products/1'>Women</Link>
                </button>
            </div>
        </div>

        <div className="col">
            <div className="row">
            <img src="/img/categories/newColection.jpg" alt="newSeason" />
                <button>
                    <Link className='link' to='/products/1'>New Season</Link>
                </button>
            </div>
        </div>

        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="/img/categories/men.webp" alt="men" />
                    <button>
                        <Link className='link' to='/products/1'>Men</Link>
                    </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="/img/categories/acssesorie.jpg" alt="acssesorie" />
                    <button>
                        <Link className='link' to='/products/1'>Accessorries</Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="/img/categories/shoes.jpeg" alt="shoes" />
                <button>
                    <Link className='link' to='/products/1'>Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories