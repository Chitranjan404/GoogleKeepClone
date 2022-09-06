import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleClick(event) {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        {/* <DeleteIcon /> */}
        <IconButton aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>
      </button>
    </div>
  );
}

export default Note;
