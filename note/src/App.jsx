//import React from 'react'
import Header from "./Header"
import FormArea from "./FormArea"
import Note from "./Note"
import Footer from "./Footer"
import { useState } from "react"

function App() {
  const [notes, setNotes] = useState([])

  const addNote = (note) =>{
    setNotes(prevNote =>{
      return [...prevNote, note]
    })

  }
  const deleteNote = (id)=>{
    setNotes(prevNotes =>{
      return prevNotes.filter((note,index)=>{
        return index !== id
      })
    })

  }
  
  return (
    <div>
      <Header/>
      <FormArea addNote={addNote}/>
      {notes.map((note, index) =>(
        <Note id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
      ))}
      <Footer/>
    </div>
  )
}

export default App