import React, {useContext} from 'react' 
import AddNote  from './AddNote';
import noteContext from "../context/notes/NoteContext"
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(noteContext);
  const {notes} = context;

  return (
    <>
    <AddNote/>
    <div className="row my-3">
      <h2>Your previous notes</h2>
      {notes.map((notes) => {
        return <Noteitem key={notes._id} notes={notes}/>;
      })}
    </div>
    </>
  );
};

export default Notes
