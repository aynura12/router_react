import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Modal } from 'antd';
import Button from "@mui/material/Button";
import axiosInstance from "async";
import state from "async";

function Product() {
  let BASE_URl = "https://northwind.vercel.app/api/products";
  const [adminproducts, setAdminproducts] = useState([]);
  const [addname,setAddname]=useState("")
  useEffect(() => {
    axios.get(BASE_URl).then((res) => {
      const ADMINPRODUCTS = res.data;
      setAdminproducts(ADMINPRODUCTS);
    });
  },[]);

  function deletepro(id){
    setAdminproducts(adminproducts.filter(product=>product.id!==id))
  }
const handleSumbit=async(e)=>{
    setIsModalOpen(false);
    e.preventDefault()
    await axiosInstance.post("adminproducts",{
        name:state.name
    })
}
  function addName(e){
    console.log(setAddname(addname,e.target.value));
    
  }
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">Product price</TableCell>
                <TableCell align="center">unitsInStock</TableCell>
                <TableCell align="center">Delete Product</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminproducts.map((adminproduct) => (
                <TableRow
                  key={adminproduct.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{adminproduct.name}</TableCell>
                  <TableCell align="center">{adminproduct.unitPrice}</TableCell>
                  <TableCell align="center">
                    {adminproduct.unitsInStock}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                     onClick={(id)=>deletepro(adminproduct.id)}
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleSumbit} onCancel={handleCancel}>
        <input type="text" placeholder="enter product name" value={addname} onChange={((e)=>addName(e))}/>
        <input type="number"placeholder="enter product price"/>
        <input type="number" placeholder=" enter unitsInStock"/>

      </Modal>
      </div>
    );
  }

export default Product;
