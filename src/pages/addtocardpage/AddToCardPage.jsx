import {  Stack } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import MainNavigation from '../../components/MainNavigation/MainNavigation'
import CartItem from '../../components/CartItem'



const AddToCardPage = () => {
  

  return (
    <div>
        <MainNavigation/>
        <Container sx={{marginTop:"150px"}}>
            <Stack direction="row" gap={4} sx={{flexWrap:'wrap'}}>
                <CartItem/>
            </Stack>
        </Container>
    </div>
  )
}

export default AddToCardPage