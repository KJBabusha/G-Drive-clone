import React from 'react'
import '../styles/sidebarItems.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
function SidebarItems({ arrow, icon, label }) {
  return (
    <div className="sidebarItem">
        <div className="sidebarItem_arrow">
            {arrow && (<ArrowRightIcon />)} 
        </div>
        <div className="sidebarItem_main">
            {icon}
            <p>{label}</p>
        </div>
        
    </div>
  )
}

export default SidebarItems