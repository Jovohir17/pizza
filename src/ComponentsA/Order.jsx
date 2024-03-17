import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

function Order() {

    const {
        cartTotal
    } = useCart()

  return (
    <>
        <div className="house offset-3">
            <div className="row">
                <h3 className='mb-3'>О вас</h3>
                <div className="col-5 d-flex">
                    <div className="room">
                        <h4>Имя*</h4>
                        <input type="text" placeholder='Алексей' />
                    </div>
                <div className="room">
                        <h4>Номер телефона*</h4>
                        <input type="number" placeholder='+7' />
                    </div>
                <div className="room">
                        <h4>Почта</h4>
                        <input type="email" placeholder='mail@gmail.com' />
                    </div>
                </div>
                    <hr /> 
            </div>








            <div className="row">
                <div className="textxx d-flex justify-content-between">
                    <h3>Доставка</h3>
                    <div className="buttons d-flex">
                        <button><a href="#!">Доставка</a></button>
                        <button><a href="#!">Самовывоз</a></button>
                    </div>
                </div>
                <div className="col-5">
                    <div className="top mb-3">
                        <h4>Улица*</h4>
                        <input type="text" placeholder='Пушкина' />
                    </div>
                    <div className="center d-flex mb-3">
                        <div className="box">
                            <h4>Дом</h4>
                            <input type="number"  placeholder='1а'/>
                        </div>
                   <div className="box">
                            <h4>Подъезд</h4>
                            <input type="number"  placeholder='1'/>
                        </div>
                   <div className="box">
                            <h4>Этаж</h4>
                            <input type="number"  placeholder='2'/>
                        </div>
                   <div className="box">
                            <h4>Квартира</h4>
                            <input type="number"  placeholder='3'/>
                        </div>
                   <div className="box">
                            <h4>Домофон</h4>
                            <input type="number"  placeholder='0000'/>
                        </div>
                    </div>
                    <div className="bottom">
                        <h4>Когда выполнить заказ?</h4>
                        <form className='d-flex'>
                        <div>
    <input type="radio" id="huey" name="drone" value="huey" checked />
    <label for="huey">Как можно скорее</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey">По времени</label>
  </div>
                        </form>
                    </div>
                </div>
            <hr />
            </div>









            <div className="row">
                <div className="col-5">
                    <h3 className='m-0 mb-3'>Оплата</h3>
                    <form className='d-flex'>
                        <div>
    <input type="radio" id="huey" name="drone" value="huey" checked />
    <label for="huey">Наличными</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey">Картой</label>
  </div>


    <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey">Apple Pay</label>
  </div>
                        </form>
                </div>
                <hr />
            </div>






            
            <div className="row">
                <div className="col-5">
                    <h3 className='m-0'>Сдача</h3>
                    <form className='d-flex align-items-center'>
                        <div>
    <input type="radio" id="huey" name="drone" value="huey" checked />
    <label for="huey">Без сдачи</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey">Сдача с</label>
  </div>

  <div className="input__group">
    <input type="number"  placeholder='0'/>
    <button><a href="#!">₽</a></button>
  </div>
                        </form>
                </div>
                <hr />
            </div>
            <div className="row">
                <div className="col-5">
                    <h3 className='m-0 mb-3'>Комментарий</h3>
                    <textarea cols="30" rows="10" placeholder='Есть уточнения?'>

                    </textarea>
                </div>
                <hr />
            </div>
            <div className="row">
                <div className="col-5">
                    <div className="order__total d-flex justify-content-between">
                        <h4>Итого: {cartTotal} ₽</h4>
                        <button><Link to="/number__order">Оформить заказ</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Order