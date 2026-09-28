import React, { useState, useEffect} from 'react'
import {db} from '../firebase'

function fileView() {
  const [files,setFiles] = useState ([])

  useEffect(() => {
    db.collection('myFile').onSnapshot (snapshot => {
      setFiles(snapshot.doc.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }, [])
  return (
    <div className="fileView">
      <div className="fileView-row">
        {/* file cards */}

      </div>
      <div className="fileView_title">
        <div className="fileView_title--left">
          <p>Name</p>
        </div>
        <div className="fileView_title--right">
          <p>Last Modified</p>
          <p>File Size</p>
        </div>
      </div>
      {/* file items */}
      
    </div>
  )
}

export default fileView