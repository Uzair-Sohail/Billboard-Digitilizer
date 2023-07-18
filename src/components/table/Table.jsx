import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Pepsi",
      img: "https://www.pepsi.com/en-us/uploads/images/twil-can.png",
      customer: "John Smith",
      date: "1 March",
      amount: 27850,
      method: "Cash",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Bold Perfume",
      img: "https://hilalcare.com/wp-content/uploads/2020/06/bold.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 10035,
      method: "Cash",
      status: "Active",
    },
    {
      id: 2357741,
      product: "Gillite Razer",
      img: "https://logos-world.net/wp-content/uploads/2020/11/Gillette-Logo.png",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Pending",
    },
    {
      id: 2342355,
      product: "Garnier Max Facewash",
      img: "data:image/jpeg;base64,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",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;