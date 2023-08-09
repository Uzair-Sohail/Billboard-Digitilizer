export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "country",
    headerName: "Country",
    width: 120,
  },
  {
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

// //temporary data
// export const userRows = [
 
// ];