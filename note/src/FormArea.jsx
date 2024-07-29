import { useState } from "react";
import { Fab, Paper, TextField } from "@mui/material"
import { Add } from "@mui/icons-material";


function FormArea({addNote}) {
  const [note, setNote] = useState({
    title : "",
    content : ""
  })

  const handleChange = (event)=>{
    const {name, value} = event.target
    setNote(prevNote =>{
      return{
        ...prevNote,[name]:value
      }

    })
  }

  const handleAdd = ()=>{
     addNote(note)
     setNote({
      title:"",
      content:""
     })
  }
  return (
    <Paper sx={{padding:"25px 50px", margin:"10px 10%"}}>
        <form>
            <TextField label="Note Title"  name="title" value={note.title} onChange={handleChange} autoComplete="off" fullWidth/>
            <TextField label="Note Content" name="content" value={note.content} onChange={handleChange} autoComplete="off" fullWidth multiline rows={3}/>

            <Fab sx={{marginTop:"20px"}} onClick={handleAdd}>
              <Add sx={{color:"#f9c31a", fontSize: "35px"}} />
            </Fab>
        </form>
    </Paper>
  )
}

export default FormArea