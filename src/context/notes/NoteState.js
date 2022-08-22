import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "62fb9f0e9a333edf481c1935",
      "user": "62f8ef22a515e1011d91fd02",
      "title": "Janmashtami",
      "description": "Time to celebrate another festival",
      "tag": "religion",
      "date": "2022-08-16T13:43:42.882Z",
      "__v": 0
    },
    {
      "_id": "62fb9f279a333edf481c1937",
      "user": "62f8ef22a515e1011d91fd02",
      "title": "Diwali",
      "description": "Time to celebrate another festival of lights and crackrs",
      "tag": "religion",
      "date": "2022-08-16T13:44:07.303Z",
      "__v": 0
    },
    {
      "_id": "62fb9f0e9a3133edf481c1935",
      "user": "62f8ef22a515e1011d91fd02",
      "title": "Janmashtami",
      "description": "Time to celebrate another festival",
      "tag": "religion",
      "date": "2022-08-16T13:43:42.882Z",
      "__v": 0
    },
    {
      "_id": "62fb91f279a333edf481c1937",
      "user": "62f8ef22a515e1011d91fd02",
      "title": "Diwali",
      "description": "Time to celebrate another festival of lights and crackrs",
      "tag": "religion",
      "date": "2022-08-16T13:44:07.303Z",
      "__v": 0
    },
    {
      "_id": "62fb9f0e9a333edf481c11935",
      "user": "62f8ef22a515e1011d91fd02",
      "title": "Janmashtami",
      "description": "Time to celebrate another festival",
      "tag": "religion",
      "date": "2022-08-16T13:43:42.882Z",
      "__v": 0
    },
    {
      "_id": "62fb9f279a333ed3f481c1937",
      "user": "62f8ef22a515e1011d91fd02",
      "title": "Diwali",
      "description": "Time to celebrate another festival of lights and crackrs",
      "tag": "religion",
      "date": "2022-08-16T13:44:07.303Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)

  //  Add a new note.
  const addNote = (title, description, tag) => {
  console.log("Adding a new note");
  const  note = {
      "_id": "62fb9f279a333ed3f481c1937",
      "user": "62f8ef22a515e1011d91fd02",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-08-16T13:44:07.303Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  } 

  // Delete a specific note.
  const deleteNote = (id) => {
    console.log("Deleting a note with id " + id)
    const newNotes = notes.filter((note) => {return note._id!==id})
    setNotes(newNotes);
  }

  // Edit a specific note.
  const editNote = () => {

  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;