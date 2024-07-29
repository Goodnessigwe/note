//import React from 'react'
import { Delete } from "@mui/icons-material"
import { Fab, Paper } from "@mui/material"



function Note({id,title,content,deleteNote}) {
  const handleDelete = () =>{
    deleteNote(id)
  }
  return (
      <Paper 
    elevation={3} 
    sx={{minHeight:"100px",minWidth:"200px",margin:"10px", padding:"10px",display:"inline-flex"}}>
       <div className="TitleContent">
       <h1>{title}</h1>
       <p>{content}</p>
       </div>
       <Fab sx={{color:"#f9c31a", marginTop:"8rem"}} onClick={handleDelete}>
         <Delete/>
       </Fab>
    </Paper>
    
  )
}

export default Note