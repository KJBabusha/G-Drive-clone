import React from 'react'
import '../styles/newFile.css'
import AddIcon from '@mui/icons-material/Add';

function newFile() {
  return (
    <div className="newFile">
        <div className="newFile_container">
            <AddIcon />
            <p>New</p>
        </div>
    </div>
  )
}

export default newFile