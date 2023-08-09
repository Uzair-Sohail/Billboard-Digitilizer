import React from 'react'
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widgets from '../../components/widgets/Widgets';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Table from "../../components/table/Table";



const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type='user'/>
          <Widgets type='order'/>
          <Widgets type='earning'/>
          <Widgets type='balance'/>
        </div>
        <div className="charts">
            <Featured />
            <Chart title={'Last 6 Months Revenue'} aspect={2 / 1} />
        </div>
          <div className='listContainer'>
            <div className="listTittle">Latest Transactions</div>
             <Table />  
             {/* <Chat />  */}
          </div>   
        </div>
    </div>
  )
}
export default Home;
