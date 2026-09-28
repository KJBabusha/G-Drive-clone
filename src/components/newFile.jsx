// import React from 'react'
// import '../styles/newFile.css'
// import AddIcon from '@mui/icons-material/Add';

// function newFile() {
//   return (
//     <div className="newFile">
//         <div className="newFile_container">
//             <AddIcon />
//             <p>New</p>
//         </div>
//     </div>
//   )
// }

// export default newFile

import { useState} from 'react'
import '../styles/NewFile.css'

import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { storage, db } from '../firebase'

const modalSx = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 5,
  px: 4,
  pt: 2,
  pb: 3,
}

export default function NewFile() {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    if (uploading) return
    setOpen(false)
    setError('')
  }

  const handleChange = (e) => {
    const selected = e.target.files?.[0]
    if (selected) setFile(selected)
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setError('')

    try {
      const fileRef = ref(storage, `files/${file.name}`)
      const snapshot = await uploadBytes(fileRef, file)
      const url = await getDownloadURL(snapshot.ref)

      await addDoc(collection(db, 'myFiles'), {
        timestamp: serverTimestamp(),
        caption: file.name,
        fileUrl: url,
        size: snapshot.metadata.size,
      })

      setOpen(false)
      setFile(null)
    } catch (err) {
      console.error('Upload failed:', err)
      setError('Upload failed. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="newFile">
      <div className="newFile_container" onClick={handleOpen}>
        <AddIcon fontSize="large" />
        <p>New</p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="upload-modal-title"
      >
        <Box sx={modalSx}>
          <p id="upload-modal-title">Select files you want to upload!</p>

          {uploading ? (
            <p>Uploading...</p>
          ) : (
            <>
              <input type="file" onChange={handleChange} />
              <button onClick={handleUpload} disabled={!file}>
                Upload
              </button>
              {error && <p role="alert">{error}</p>}
            </>
          )}
        </Box>
      </Modal>
    </div>
  )
}