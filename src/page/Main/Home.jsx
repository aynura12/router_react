import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Home() {
  let URL = "https://northwind.vercel.app/api/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(URL).then((res) => {
      const PRODUCTS = res.data;
      setProducts(PRODUCTS);
    });
  },[]);

  return (
    <div>
      {products.map((product, index) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Name: {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Unit Price:  {product.unitPrice}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {product.unitsInStock}
                </Typography>
               
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}

export default Home;
