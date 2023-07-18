import React from 'react'
import "./payment.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Table from "../../components/table/Table";



const Payment = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
            <Featured />
            <Chart title={'Last 6 Months Payments'} aspect={2 / 1} />
        </div>
          <div className='listContainer'>
            <div className="listTittle">Latest Transactions</div>
             <Table />   
          </div>   

        </div>
    </div>
  )
}
export default Payment;
