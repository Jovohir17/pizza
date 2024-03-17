import React from 'react'
import { Link } from 'react-router-dom'

function OrderPart() {
  return (
    <>
     <div className="container order__in__road d-flex ">
        <div className="main__box">
          <img src="../images/dostavka.png" alt="Error" />
          <h1 className='mb-2'>Заказ №310202 принят</h1>
          <h2 className='mb-3'>Спасибо за заказ!  <br />
          Примерное время доставки 45 минут. Статус отследить можно нажав на кнопку ниже</h2>
          <button><Link to="/account">Отследить заказ</Link></button>
        </div>
     </div>
    </>
  )
}

export default OrderPart