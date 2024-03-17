import React from 'react';
import "../home/Home.scss";
import data from '../../DataBase/Data';
import PizzaProps from '../Props/PizzaProps';

export default function Main() {
  console.log("🚀 ~ file: Main.js:4 ~ data:", data.PizzaProductData)
  return (
    <>
        <main>
        <div className="header__menu">
                <div className="menu__tovars">
                    <div className="sales">
                        <img src="./imgs/Fire.svg" alt="Error" />
                        <a href="#">Акции</a>
                    </div>
                    <div className="pizza">
                        <img src="./imgs/pizza.svg" alt="Error" />
                        <a href="#">Пицца</a>
                    </div>
                    <div className="sushi">
                        <img src="./imgs/Sushi.svg" alt="Error" />
                        <a href="#">Суши</a>
                    </div>
                    <div className="sodas">
                        <img src="./imgs/Drink.svg" alt="Error" />
                        <a href="#">Напитки</a>
                    </div>
                    <div className="bonus">
                        <img src="./imgs/Snacks.svg" alt="Error" />
                        <a href="#">Закуски</a>
                    </div>
                    <div className="combo">
                        <img src="./imgs/Combo.svg" alt="Error" />
                        <a href="#">Комбо</a>
                    </div>
                    <div className="deserts">
                        <img src="./imgs/keks.svg" alt="Error" />
                        <a href="#">Десерты</a>
                    </div>
                    <div className="sous">
                        <img src="./imgs/Sauce.svg" alt="Error" />
                        <a href="#">Соусы</a>
                    </div>
                </div>

                <div className="menu__infos">
                    <div className="sale__pizza">
                        <img src="./imgs/pizza3.png" alt="" />
                        <p>3 средние пиццы <br /> от 999 рублей</p>
                    </div>
                    <div className="sale__bag">
                        <img src="./imgs/pizza__bag.png" alt="" />
                        <p>Кэшбек 10% на <br /> самовывоз (доставка)</p>
                    </div>
                    <div className="sale__pizza">
                        <img src="./imgs/pizza3.png" alt="" />
                        <p>3 средние пиццы <br /> от 999 рублей</p>
                    </div>
                    <div className="sale__bag">
                        <img src="./imgs/pizza__bag.png" alt="" />
                        <p>Кэшбек 10% на <br /> самовывоз (доставка)</p>
                    </div>
                </div>

                <div className="check__addres">
                    <p>Проверить адрес доставки</p>
                    <img src="./imgs/Location.svg" alt="" />
                    <input
                    className='yandex'
                     type="text"
                     placeholder='Адрес'
                    />
                    <button>Проверить</button>
                </div>
            </div>
            <div className="main__menu">
              <div className="pizza__menu">
                <p className='pizza__title'>Пицца</p>
                <div className="pizzas">
                  {data.PizzaProductData.map((item,index)=>{
                    return(

                    <PizzaProps
                      promotion={item.promotion}
                      img={item.img}
                      title={item.title}
                      info={item.info}
                      price={item.price}
                      item={item}
                      key={index}
                    />
                    )
                  })}
                </div>

              </div>
            
            </div>

            <div className="checked__button offset-3">
              <h4>Доставка пиццы в Москве</h4>
              <p className='check__text'>
                Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.
              </p>
              <p className='checked__text' id='opened'>
                <span>Как сделать заказ </span> Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое в «Корзину»; не уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии Domino’s. И не забудьте оплатить заказ курьеру!
                </p>

              <a className='open__check' href="#opened">Показать полностью</a>
            </div>
        </main>

    </>
  )
}
