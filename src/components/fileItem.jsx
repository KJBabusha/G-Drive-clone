import React from 'react'
import '../styles/fileItem.css'

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const monthNames= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Helper function moved outside to prevent re-creation on every render
const getReadableFileSizeString = (fileSizeInBytes) => {
  if (!fileSizeInBytes) return '0 kB';
  let i = -1;
  const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
  do {
    fileSizeInBytes /= 1024;
    i++;
  } while (fileSizeInBytes > 1024 && i < byteUnits.length - 1);

  return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
};



function fileItem( {id, caption, timestamp, fileUrl,size}) {

  const formatDate = (ts) => {
    if (!ts) return '';
    const dateObj = typeof ts.toDate === 'function' ? ts.toDate() : new Date(ts);
    const day = dateObj.getDate();
    const month = monthNames[dateObj.getMonth()]; // Fixed: removed +1
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  };
  

  return (
    <div className='fileitem'>
      <a href={fileUrl} target="_blank" rel ="noopener noreferrer" download>
        <div className="fileItem-left">
          <InsertDriveFileIcon/>
          <p>{caption}</p>
        </div>
        <div className="fileItem-right">
          <p>{formatDate(timestamp)}</p>
          <p>{getReadableFileSizeString(size)}</p>
        </div>
      </a>
      
    </div>
  )
}

export default fileItem

