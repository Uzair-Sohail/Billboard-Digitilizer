import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Product from '../../components/product/Product'


export const Products = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
          <div className='listContainer'>
            <div className="table">
              <Product />   
            </div>
          </div>   
        </div>
    </div>
  )
}
export default Products