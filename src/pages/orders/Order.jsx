import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Table from "../../components/table/Table";
import "./order.scss";


export const Order = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
          <div className='listContainer'>
            <div className="listTittle">My Orders</div>
            <div className="table">
              <Table />   
            </div>
          </div>   
        </div>
    </div>
  )
}