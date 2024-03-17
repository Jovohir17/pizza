import React, { Component } from 'react';
import qizil from "../imgs/qizil.png";
// import""from "../imgs""Ellipse 3.png";
// import belgi from "../imgs/arrow.svg";
import olovrang from "../imgs/olovrang.png";
import yashil from "../imgs/yashil.png";
import kulirang from "../imgs/kulirang.png";
import {Pagination } from "@mui/material"
import { useCart } from 'react-use-cart';
import "../sass/index.css"







function Bolim()  {
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

            {/* <div className="container ac__con"> */}
            <div className="row offset-6 row__orderss">
              <div className="col-5">
        {items.map((item,index)=>{
          return(
          
              <div class="accordion accordion-flush" id="accordionFlushExample" key={index}>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <img src={yashil} style={{marginRight: 16}} alt="Error" />
                    <div className="mini__box">
                          <h2>Заказ</h2>
                          <h3>
                          №130312
                            <span style={{marginLeft: 8}}>
                            22.06.21
                            </span>
                          </h3>
                        </div>
          
                        <div className="mini__box1" style={{marginLeft: 85}}>
                          <h2>Сумма заказа</h2>
                          <h3>{cartTotal}  ₽</h3>
                        </div>
          
                        <div className="mini__box1" style={{marginLeft: 85}}>
                          <h2>Статус</h2>
                          <h3>Обрабатывается</h3>
                        </div>
          
                        <div className="mini__box1" style={{marginLeft: 85}}>
                          <h2>Оплачено</h2>
                          <h3>Картой</h3>
                        </div>
                  </button>
                        <hr  className='mt-0'/>
          
                        <div className="text">
                          <h3>ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801# <span><img src={item.img} alt="Error" /><img src={item.img} alt="Error" /><img src={item.img} alt="Error" /></span></h3>
                        </div>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <hr />
                  <div class="accordion-body">
          
                    <div className="mini____box d-flex">
                      <img src={item.img} alt="Error" />
                      <div className="boxes d-flex" style={{gap: 50}}>
                        <h2>{item.title} </h2>
                        <h3>{item.info} </h3>
                        <button><span>{item.quantity} товар</span></button>
                        <span>{item.price} ₽</span>
                      </div>
                  </div>
          <div className="mini____box d-flex">
                      <img src={item.img} alt="Error" />
                      <div className="boxes d-flex" style={{gap: 50}}>
                        <h2>{item.title}</h2>
                        <h3>{item.info} </h3>
                        <button><span>{item.quantity} товар</span></button>
                        <span>{item.price} ₽</span>
                      </div>
                  </div>
          <div className="mini____box d-flex">
                      <img src={item.img} alt="Error" />
                      <div className="boxes d-flex" style={{gap: 50}}>
                        <h2>{item.title}</h2>
                        <h3>{item.info}</h3>
                        <button><span>{item.quantity} товар</span></button>
                        <span>{item.price} ₽</span>
                      </div>
                  </div>
                  <hr style={{marginTop: 12}} />
                  <div className="replay__order d-flex">
                    <a href='#!'>Повторить заказ</a>
                  </div>
          
                  </div>
                </div>
              </div>
             </div> 
          
            
            )
          })}
          </div>
              </div>
            {/* </div> */}

      <Pagination className="sl offset-8" count={105} color="primary" />
      






        
      </>
    )
  }

export default Bolim;