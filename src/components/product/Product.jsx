import React, { useState, useEffect } from 'react';
import './product.scss'; // Import the custom styles

// ... Rest of your code ...
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API endpoint in the backend
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

return (
  <div className="root">
    <h1>My Products</h1>
    <div className="table-container">
      <table className='styled-table'>
        <thead>
          <tr className='active-row'>
            <th>Name</th>
            <th>Location</th>
            <th>Size</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.billboardLocation}</td>
              <td>{product.billboardSize}</td>
              <td>{product.price}</td>
              <td>{product.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};
export default App;
