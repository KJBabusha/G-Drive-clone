import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import FileView from './components/fileView'
import SideIcon from './components/sideIcon'
import GDriveLogo  from './media/google-drive-logo.png'
import{auth,provider} from './firebase'
import { useState } from 'react'
import { signInWithPopup } from 'firebase/auth'

function App() {
  // authentication
  const [user,setUser] = useState()

  const handleLogin = () =>{
    if(!user){
    signInWithPopup(auth, provider).then((result) =>{
        setUser(result.user);
      })
      .catch((error)=>{
        console.error("login failed:", error)
      })
    }

  }


  return (

    <div className="App">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app_main">
              <Sidebar />
              <FileView />
              <SideIcon />
            </div>
          </>

        ) : (
          /*not auth: login*/
          <div className="app-login">
            <img src={GDriveLogo} alt="Google Drive" />
            <button onClick={handleLogin}>log In to Google Drive</button>
          </div>
        )
      }

    </div>
  )
}

export default App
