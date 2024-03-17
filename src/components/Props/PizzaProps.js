import React from 'react'
import { useCart } from 'react-use-cart';
import "../home/Home.scss"

function PizzaProps(props) {
    const { addItem } = useCart()
  return (
    <>

                <div className="pizza">
                  <p className='card__new'>{props.promotion} </p>
                    <img src={props.img} alt="Error" />
                    <div className="pizza__texts">
                      <p className='pizza__name'> {props.title} </p>
                      <p className='pizza__info'>{props.info}</p>
                      <div className="pizza__cost">
                        <button onClick={()=> addItem(props.item)}>Выбрать</button>
                        <p className='cost'>от {props.price} ₽</p> 
                      </div>
                      
                    </div>

                  </div>

    </>
  )
}

export default PizzaProps