import { Box, Button, Container, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import MainNavigation from '../../components/MainNavigation/MainNavigation'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

const AddToCardForm = () => {
  const dispatch = useDispatch();

  const [inputData , setInputData] = useState({
    productName: '',
    price: '',
    qty: ''
  })

  const inputDataHandler = (event) =>{
    setInputData({...inputData,
      [event.target.name]: event.target.value
    })
    
  }

  const cartSubmitHandler= (event) =>{
      event.preventDefault();
      const API_URL = "https://redux-cart-27256-default-rtdb.asia-southeast1.firebasedatabase.app/cartitem.json"
      const postData = {
          productName: inputData.productName,
          price: inputData.price,
          qty: inputData.qty
      }
      const axiosConfig = {
          headers: {
            "Content-Type": "application/json",
          }
        }
      axios.post(API_URL,postData,axiosConfig).then(res=>{
        dispatch(addToCart({...inputData,id: res.data.name}))
        
      })
      
      setInputData({
        productName:'',
        price:'',
        qty:''
      })
  }
  return (
    <>
      <MainNavigation /> 
      <Container>
        <Box sx={{marginTop:"150px"}} >
            <h1>Fill Products Form</h1>
            <form onChange={inputDataHandler} onSubmit={cartSubmitHandler}>
              <Stack gap="20px" width={500}>
                <TextField name='productName' value={inputData.productName} label="Product Name" variant="outlined" required/>
                <TextField name='price' value={inputData.price} label="Price $" variant="outlined" required type='number'/>
                <TextField name='qty' value={inputData.qty} label="Quanitity" variant="outlined" required type='number'/>
              </Stack>
              <Button sx={{marginTop:3}} variant="contained" type='submit'>Add to cart</Button>
            </form>
        </Box>
      </Container>
    </>
  )
}


export default AddToCardForm
