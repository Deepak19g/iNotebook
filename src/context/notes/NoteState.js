import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) =>{
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
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;