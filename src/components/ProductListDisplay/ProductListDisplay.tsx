import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import "./ProductListDisplay.css";

function createData(
  name: string,
  price: string,
  status: string,
  sales: number,
  revenue: string
) {
  return { name, price, status, sales, revenue };
}

const rows = [
  createData("The Ultimate Digital Arsenal", "$159", "Published", 24, "$3,816"),
  createData("Profit Powerhouse Playbook", "$237", "Published", 37, "$8,769"),
  createData("CodeMaverick Mastery", "$262", "Draft", 24, "$6,288"),
  createData("WebWizard's Workshop", "$305", "Draft", 67, "$20,435"),
  createData("DesignMaven Masterclass", "$35", "Published", 49, "$1,715"),
];

export default function ProductListDisplay() {
  return (
    <>
      <input
        type="text"
        className="product-search-bar"
        placeholder="Search Products by name..."
        defaultValue=""
      ></input>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Total Sales</TableCell>
              <TableCell align="left">Total Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{row.sales}</TableCell>
                <TableCell align="left">{row.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
