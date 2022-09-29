import React from 'react'
import { Container ,AppBar, Typography, Badge} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MainNavigation = () => {
  const items = useSelector(state=>state.cart.cartItems);

  return (
    <AppBar>
        <Container sx={{display:'flex' , justifyContent:'space-between' , padding:"20px 0px"}}>
            <Link sx={{textDecoration:'none'}} to="/">
              <Typography>Logo</Typography>
            </Link>
            <Link to="/form">
              <Typography>Form</Typography>
            </Link>
            <Link to='/cart'>
              <Badge badgeContent={items.length} color="error">
                  <ShoppingCart />
              </Badge>
            </Link>
        </Container>
    </AppBar>
  )
}

export default MainNavigation