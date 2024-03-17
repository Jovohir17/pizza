import React from 'react';
import "../home/Home.scss";
import { useCart } from 'react-use-cart';
import { Link } from "react-router-dom"

export default function Header() {
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

    //  { if (isEmpty)   return <h2 className="text-center mt-5 mb-5">Ваш список заказов пуст!</h2>}
     
  return (
    <>

        <header>
            <nav className='navbar'>
                <div className="nav__userloc">
                    <div className="nav__location">
                        <img className='loc__icon' src="./imgs/Location.svg" alt="" />
                        <code className='code__px'>1680px</code>
                        <select className='locations' id="">
                            <option className='city' value="0">Москва</option>
                            <option className='city' value="1">Санкт-Петербург</option>
                            <option className='city' value="2">Новгород</option>
                            <option className='city' value="3">Казань</option>
                            <option className='city' value="4">Питер</option>
                            <option className='city' value="5">Екатиринбург</option>
                        </select>

                        <a href="#" className='check__addres'>Проверить адрес</a>
                        <p className='zakaz__time'>Среднее время доставки: <span>00:24:19</span></p>
                    </div>
                    <div className="nav__user">
                        <p className='work__time'>Время работы: с 11:00 до 23:00</p>
                        <Link to="account">
                            <img src="./imgs/Account.svg" alt="" />
                            Войти в аккаунт
                        </Link>
                    </div>

                </div>

            </nav>
            <div className="header__nav">
                <Link to="/" className='header__logo'>
                    <img src="./imgs/pizza__logo.svg" alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="97" height="16" viewBox="0 0 97 16" fill="none">
                        <path d="M1.57087 5.5341V0H-0.00012207V12.5957H1.57087V6.79105H1.93743L7.62791 12.5957H9.70511L3.29023 6.06656L9.19891 0H7.22644L1.93743 5.5341H1.57087Z" fill="#191919"/>
                        <path d="M11.7299 16C13.3969 16 14.1475 15.3541 14.9505 13.1719L18.6249 3.18603H17.0277L14.453 10.9285H14.3134L11.7299 3.18603H10.1066L13.589 12.6045L13.4144 13.1631C13.0217 14.2979 12.5504 14.7081 11.6863 14.7081C11.4768 14.7081 11.2412 14.6994 11.0579 14.6645V15.9476C11.2674 15.9825 11.5292 16 11.7299 16Z" fill="#191919"/>
                        <path d="M26.4362 11.3388H21.793V11.1991C22.2381 10.6143 22.4825 9.61047 22.5698 8.46699L22.8665 4.44299H26.4362V11.3388ZM20.6671 15.0835V12.5957H28.0246V15.0835H29.4385V11.3388H27.9373V3.18603H21.5225L21.1559 8.43208C21.0686 9.69776 20.7282 10.8849 20.0387 11.3388H19.2533V15.0835H20.6671Z" fill="#191919"/>
                        <path d="M34.3173 11.4435C33.2263 11.4435 32.4147 10.8849 32.4147 9.92471C32.4147 8.982 33.0431 8.48445 34.4744 8.38843L37.0055 8.22259V9.08674C37.0055 10.431 35.8621 11.4435 34.3173 11.4435ZM34.038 12.7616C35.2948 12.7616 36.3247 12.2117 36.9356 11.2079H37.0753V12.5957H38.5066V6.15385C38.5066 4.19858 37.2236 3.02019 34.9283 3.02019C32.9209 3.02019 31.4372 4.01528 31.2364 5.52537H32.7551C32.9645 4.78342 33.75 4.3557 34.8759 4.3557C36.2811 4.3557 37.0055 4.99291 37.0055 6.15385V7.00927L34.2911 7.17512C32.1005 7.30606 30.8611 8.27496 30.8611 9.95963C30.8611 11.6792 32.2139 12.7616 34.038 12.7616Z" fill="#191919"/>
                        <path d="M52.6019 12.5957H54.1031V3.18603H46.4925V12.5957H47.9937V4.44299H52.6019V12.5957Z" fill="#191919"/>
                        <path d="M58.5891 12.5957L63.2759 5.57774H63.4156V12.5957H64.9167V3.18603H63.4156L58.7288 10.204H58.5891V3.18603H57.088V12.5957H58.5891Z" fill="#191919"/>
                        <path d="M76.9348 15.0835V11.3388H75.4337V3.18603H73.9325V11.3388H69.4115V3.18603H67.9103V12.5957H75.5209V15.0835H76.9348Z" fill="#191919"/>
                        <path d="M87.9318 15.0835V11.3388H86.4306V3.18603H84.9294V11.3388H80.4085V3.18603H78.9073V12.5957H86.5179V15.0835H87.9318Z" fill="#191919"/>
                        <path d="M92.8106 11.4435C91.7196 11.4435 90.9079 10.8849 90.9079 9.92471C90.9079 8.982 91.5363 8.48445 92.9677 8.38843L95.4987 8.22259V9.08674C95.4987 10.431 94.3554 11.4435 92.8106 11.4435ZM92.5313 12.7616C93.7881 12.7616 94.8179 12.2117 95.4289 11.2079H95.5685V12.5957H96.9999V6.15385C96.9999 4.19858 95.7169 3.02019 93.4215 3.02019C91.4141 3.02019 89.9304 4.01528 89.7297 5.52537H91.2483C91.4578 4.78342 92.2433 4.3557 93.3691 4.3557C94.7743 4.3557 95.4987 4.99291 95.4987 6.15385V7.00927L92.7844 7.17512C90.5937 7.30606 89.3544 8.27496 89.3544 9.95963C89.3544 11.6792 90.7072 12.7616 92.5313 12.7616Z" fill="#191919"/>
                    </svg>
                </Link>

                <button class="add__tovar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                    <img src="./imgs/shop.svg" alt="" />
                     {totalItems}
                </button>
                <div class="offcanvas offcanvas-end" id="offcanvasWithBackdrop"  aria-labelledby="offcanvasWithBackdropLabel">
                <div className="modal-backdrop fade show"></div>
                   
                        <div class="offcanvas-header">
                            <h5 id="offcanvasRightLabel">Ваш заказ: <span> {totalItems} </span></h5>
                            <button type="button" class="close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                                <img src="./imgs/Cross.svg" alt="" />
                            </button>
                        </div>
                        <div class="offcanvas-body">
                        {items.map((item,index)=>{
                            return(
                                <div className="card" key={index}>
                            <div className="card__pizza">
                            <img src={item.img} alt="Error" />
                                <div className="pizza__info">
                                    <p className='pizza__title'> {item.title} </p>
                                    <p className='pizza__cm'> {item.text} </p>
                                    <div className="cost">
                                        <div className="buttons">
                                            <button className='decrement' ><a href="#!">
                                            <svg onClick={()=> updateItemQuantity(item.id, item.quantity -1)} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                    <path d="M8 4C8 3.58579 7.66421 3.25 7.25 3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H7.25C7.66421 4.75 8 4.41421 8 4Z" fill="#FF7010"/>
                                                    </svg>
                                            </a></button>
                                            <h4> {item.quantity} </h4>
                                            <button className='increment'><a href="#!">
                                            <svg onClick={()=> updateItemQuantity(item.id, item.quantity +1)} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <g clip-path="url(#clip0_18045_2726)">
                                                <path d="M8 4C8 3.58579 7.66421 3.25 7.25 3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H7.25C7.66421 4.75 8 4.41421 8 4Z" fill="#FF7010"/>
                                                <path d="M4 8C4.41421 8 4.75 7.66421 4.75 7.25L4.75 0.75C4.75 0.335786 4.41421 -1.46777e-08 4 -3.27835e-08C3.58579 -5.08894e-08 3.25 0.335786 3.25 0.75L3.25 7.25C3.25 7.66421 3.58579 8 4 8Z" fill="#FF7010"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_18045_2726">
                                                <rect width="8" height="8" fill="white"/>
                                                </clipPath>
                                                </defs>
                                                </svg>
                                            </a></button>
                                        </div>
                                        <p>{item.price} ₽</p>

                                    </div>
                                </div>

                            </div>
                              
                            </div>
                            )
                        })}
                            
                        </div>
                        <div className="offcanvas-footer" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                            <p>Итого:  {cartTotal} ₽</p>
                            <button><Link to="order">Оформить заказ</Link></button>

                        </div>
                    </div>
                </div>

           

        </header>

    </>
  )
}
