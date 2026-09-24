import React from 'react'
import '../styles/sidebar.css'
import NewFile from './newFile'
import SidebarItems from './sidebarItems';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import StorageIcon from '@mui/icons-material/Storage';

function Sidebar() {
  return (
    <div className="sideBar">
        <NewFile />

        <div className="sidebar_itemsContainer">
            {/* sidebar items */}
            <SidebarItems arrow icon={(<InsertDriveFileIcon />)} label={'My Drive'} />
            <SidebarItems arrow icon={(<ImportantDevicesIcon />)} label={'Computers'} />
            <SidebarItems icon={(<PeopleAltIcon />)} label={'Shared with me'} />
            <SidebarItems icon={(<QueryBuilderIcon />)} label={'Recent'} />
            <SidebarItems icon={(<StarBorderIcon />)} label={'Starred'} />
            <SidebarItems icon={(<DeleteIcon />)} label={'Bin'} />


            <hr />

            {/* sidebar elements */}
            <SidebarItems icon={(<StorageIcon />)} label="Storage" />
        </div>
    </div>
  )
}

export default Sidebar