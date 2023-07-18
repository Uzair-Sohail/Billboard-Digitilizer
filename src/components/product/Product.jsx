import React from 'react';
import DataTable from 'react-data-table-component';
import './product.scss';
const Products = () => {
  // Sample data
  const data = [
    {
      id: 1,
      name: 'Rawalpindi Billboard',
      price: '$100',
      location: 'Saddar',
      size: '100 Inches',
      avilability: 'yes',
    },
    {
      id: 2,
      name: 'Islamabad',
      price: '$800',
      location: 'Blue Area',
      size: '150 inches',
      avilability:'No'
    },
    // Add more data as needed

  ];

  // Define columns
  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Price',
      selector: 'price',
      sortable: true,
    },
    {
      name: 'Billboard Location',
      selector: 'location',
      sortable: true,
    },
    {
      name: 'Billboard Size',
      selector: 'size',
      sortable: true,
    },
    {
      name: 'Availability',
      selector: 'available',
      sortable: true,
    },
  ];

  return (
    <div className="container">
    {/* <DataTable
      title="Product Datatable"
      columns={columns}
      data={data}
      pagination
      className="table table-striped"
    /> */}
  </div>
  );
};

export default Products;
