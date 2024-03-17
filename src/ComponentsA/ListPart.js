import React from 'react'
// import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useCart } from "react-use-cart"


function ListPart(props) {

  const { addItem } = useCart()

   
  return (
    <>

    <div className="sliderrr">
      <div className="card">
        <div className="card-body">
          <img src={props.img} alt="Error" />
        </div>
        <div className="card-footer">
              <h4>{props.title} </h4>
              <p>{props.info} </p>
              <button onClick={()=> addItem(props.item)}><a href="#!">{props.price} ₽</a></button>
        </div>
      </div>
    </div>
        
    </>
  )
}

export default ListPart