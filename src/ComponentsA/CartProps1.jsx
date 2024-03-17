import React from 'react'
import ListPart from '../ComponentsA/ListPart'
import data from "../Data/Data1"
import Slider from "react-slick"

function CartProps1() {
    console.log(data.pizzaProductDatann)


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

<div className="container offset-3">
                <div className="row">
                    <div className="col-5">
                        <h2>Соусы</h2>
                        <Slider {...settings}>
                           {data.pizzaProductDatann.map((item,index)=>{
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
        
    </>
  )
}

export default CartProps1