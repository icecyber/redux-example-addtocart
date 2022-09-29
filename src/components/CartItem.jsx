import {
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartItem = () => {
  const items = useSelector(state=>state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItemBTN = (event) => {
    event.preventDefault();
    const selectedRemoveItem = event.target.name;
    console.log(selectedRemoveItem);
    dispatch(removeFromCart(selectedRemoveItem));
   
  } 

  return (
    <>
      {items.map((data) => {
       return (
        <Card sx={{ minWidth: 275, padding: "15px" }} key={data.id} >
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Product : {data.productName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Unit Price : {data.price}
          </Typography>
          <Typography 
            variant="body2">
              Quantity : {data.qty}
          </Typography>
          <Button variant="contained" onClick={handleRemoveItemBTN} name={data.id}>Remove</Button>
        </CardContent>
      </Card>
       )
      })}
    </>
  );
};

export default CartItem;
