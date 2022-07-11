import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import noteContext from '../context/notes/noteContext'

function Noteitem(props) {

    const context = useContext(noteContext)
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className='col-md-3' >
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <FontAwesomeIcon className='mx-2 icon' icon={faTrashCan} onClick={() => {
                            deleteNote(note._id);
                            props.showAlert("Deleted successfully", "danger")
                        }} />
                        <FontAwesomeIcon className='mx-2 icon' icon={faPenToSquare} onClick={() => {
                            updateNote(note)
                        }} />
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem