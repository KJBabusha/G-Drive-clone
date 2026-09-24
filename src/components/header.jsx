import React from 'react'
import '../styles/header.css'
import GDriveLogo from '../media/google-drive-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
function header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={GDriveLogo} alt="logo" />
        <span>Drive</span>
      </div>
      <div className="header_searchContainer">
        <div className="header_searchBar">
          <SearchIcon />
          <input type="text" placeholder='Search in Drive' />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header_icons">
        <span>
          <HelpIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <img src="https://lh3.googleusercontent.com/a/AATXAJx0g1k5J6z7Z8F9G9G9G9G9G9G9G9G9G9G9G9G9G=s96-c" alt="profile" />
      </div>
    </div>
  )
}

export default header