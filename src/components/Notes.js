import React, {useContext} from 'react' 
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;

  return (
    <div className="row my-3">
      <h2>Your previous notes</h2>
      {notes.map((notes) => {
        return <Noteitem notes={notes}/>;
      })}
    </div>
  );
};

export default Notes;
