import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Products } from "../../Types";

import { useContext } from "react";

import "./ProductListDisplay.css";

export default function ProductListDisplay() {
  function createData(
    name: string,
    price: string,
    status: string,
    sales: number,
    revenue: string
  ) {
    return { name, price, status, sales, revenue };
  }

  const userProducts: Products[] = [
    {
      name: "Dog Bone",
      description: "A dog bone",
      price: 233,
      taxCategory: "exempt",
      productImages: [""],
      status: "Active",
      files: ["hello"],
      sales: 12,
      revenue: 23,
    },
  ];

  let productRows: {
    name: string;
    price: string;
    status: string;
    sales: number;
    revenue: string;
  }[] = [];

  userProducts.forEach((product) => {
    const price = "$" + product.price.toString();
    const revenue = "$" + product.revenue.toString();
    productRows.push(
      createData(product.name, price, product.status, product.sales, revenue)
    );
  });

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
            {productRows.map((row) => (
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
