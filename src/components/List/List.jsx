import './List.scss'
import React from 'react'
import Card from '../Card/Card';

const List = () => {

     const data = [
        {
            id: 1,
            img: "../img/clothes/pexels-engin-akyurt-1642228.jpg",
            img2: "../img/clothes/pexels-evg-kowalievska-1055691.jpg",
            title: "Long Sleeve Graphic T-shorts",
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 2,
            img: "../img/clothes/pexels-evg-kowalievska-1055691.jpg",
            title: "Long Sleeve Graphic T-shorts",
            isNew: true,
            oldPrice: 20,
            newPrice: 15,
        },
        {
            id: 3,
            img: "../img/clothes/pexels-godisable-jacob-932405.jpg",
            title: "Long Sleeve Graphic T-shorts",
            isNew: false,
            oldPrice: 30,
            newPrice: 24,
        },
        {
            id: 4,
            img: "../img/clothes/pexels-marlene-leppänen-1183266.jpg",
            title: "Long Sleeve Graphic T-shorts",
            isNew: false,
            oldPrice: 10,
            newPrice: 5,
        },

    ];

  return (
    <div className='list'>
        {data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List