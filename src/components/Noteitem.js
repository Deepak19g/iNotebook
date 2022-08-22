import React, {useContext} from 'react' 
import noteContext from "../context/notes/NoteContext"

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { notes } = props;
  
  return (
    <div className="col-md-3">
      <div className="card my-2">   
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{notes.title}</h5>
            <i className="fa-solid fa-pen-to-square mx-4 my-1"></i>
            <i className="fa-solid fa-trash-can  my-1" onClick={()=>{deleteNote(notes._id)}}></i>
          </div>
          
          <p className="card-text"> {notes.description} </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
