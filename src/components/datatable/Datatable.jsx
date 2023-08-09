import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";


const Datatable = () => {
  const [data, setData] = useState();
  useEffect(() => {
    // Fetch products from the API endpoint in the backend
    fetch('http://localhost:3000/api/users')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id)); // Change 'id' to the correct field
  };
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  
  return (
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/users/new" className="link">
            Add New
          </Link>
        </div>
        {data ? (
          <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
          />
        ) : (
          <div>Loading data...</div>
        )}
      </div>
    );
    
};

export default Datatable;