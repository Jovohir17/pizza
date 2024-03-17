import React from 'react'
import ListPart from '../ComponentsA/ListPart'
import data from "../Data/Data"
import Slider from "react-slick"


function CartProps  ()  {

  console.log(data.pizzaProductData)


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  return (
    <>
        {/* <h2 className="text-center mt-3">All Items</h2> */}
        <article>
            <div className="container offset-3">
                <div className="row">
                    <div className="col-5">
                        <h2>Добавить к заказу?</h2>
                        <Slider {...settings}>
                           {data.pizzaProductData.map((item,index)=>{
                                return(
                                  <ListPart
                                      img={item.img}
                                      title={item.title}
                                      info={item.info}
                                      price={item.price}
                                      item={item}
                                      key={index}
                                    />
                                    )
                                })}
                        </Slider>
                    </div>
                </div>
            </div>
        </article> 
    </>
  )
}

export default CartProps
              