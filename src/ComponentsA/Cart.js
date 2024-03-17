import React from 'react'
import { useCart } from 'react-use-cart'


function Cart() {

    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
     } = useCart()

     if(isEmpty) return <h1 className="text-center mt-5 mb-5">Ваш список заказов пуст!</h1>
    
    

  return (
    <>
        <main>
            {/* <div className="container"> */}
                <div className="row offset-3">
                    <div className="col-5">
                        <h1>Ваш заказ</h1>
                        {items.map((item,index)=>{
                            return(
                                <div className="card mb-3" key={index}>
                            <div className="card-body">

                                    <div className="left">
                                        <div className="order__img">
                                            <img src={item.img} alt="Error" />
                                        </div>
                                        <div className="text__order">
                                        <h3>{item.title} </h3>
                                        <h4>{item.info} </h4>
                                        </div>
                                    </div>

                                <div className="right">
                                    <div className="buttons">
                                        <button onClick={()=> updateItemQuantity(item.id, item.quantity -1)}><a href="#!">-</a></button>
                                        <h4>{item.quantity} </h4>
                                        <button onClick={()=> updateItemQuantity(item.id, item.quantity +1)}><a href="#!">+</a></button>
                                    </div>
                                    <h4>{item.price} ₽ </h4>
                                </div>

                            </div>
                        </div>
                            )
                        })}
                        <div className="card" id='card__input'>
                            <div className="card-body">
                                <div className="left">
                                    <input type="text" placeholder='Промокод' /><button><a href="#!"><img src="../images/send.svg" alt="" /></a></button>
                                </div>
                                <div className="right">
                                    <h2>Итого: {cartTotal} ₽</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </main>
    </>
  )
}

export default Cart