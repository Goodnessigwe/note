//import React from 'react'
import Paper from '@mui/material/paper'
function Header() {
  return (
    <Paper 
    elevation={3} 
    square 
    sx={{background:"#f9c31a",padding:"10px",height:"60px"}}>
        <h1 className='h1H'>React Note</h1>
    </Paper>
  )
}

export default Header