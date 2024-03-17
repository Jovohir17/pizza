import React, { Component } from 'react'
// import {Pagination } from "@mui/material"

import { Link, Outlet } from 'react-router-dom';

export default class Hisob extends Component {
  render() {

    
    return (
      <>



      <div className="containerr m-0 p-0">
        <div className="row" style={{minHeight: 550}}>
          <div className="col-5">
        <h1 className="h2">Мой аккаунт</h1>
        <div className="bolim d-flex">
        <button className="mb-4"><Link className="a" to="history">История заказов</Link></button>
        <button><Link className="a1"  to="settings">Настройки</Link></button>
        
        </div>
      <Outlet/>
          </div>
        </div>
      </div>








      </>
    )
  }
}
