import React, { useState, useEffect } from 'react'
import '../styles/fileView.css'
import { db } from '../firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import FileItem from './fileItem'
import FileCard from './fileCard'
function fileView() {
  const [files, setFiles] = useState([])

  useEffect(() => {
    // db.collection('myFiles').onSnapshot (snapshot => {
    //   setFiles(snapshot.docs.map(doc => ({
    //     id: doc.id,
    //     item: doc.data()
    //   })))
    // })
    const colRef = collection(db, 'myFiles');

    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      setFiles(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })));
    });

    return () => unsubscribe();

  }, [])
  console.log(files) // something to remove 
  return (
    <div className="fileView">
      <div className="fileView_row">
        {/* file cards */
          files.slice(0, 5).map(({ id, item }) => (
            <FileCard name={item.caption} />
          ))
        }

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
      {/* file items */
        files.map(({ id, item }) => (
          <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
        ))

      }


    </div>
  )
}

export default fileView