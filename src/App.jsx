import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
function App() {
  // authentication

  return (
    <>
     <div className="App">
      {/*header*/}
      <Header />  
      <Sidebar />
      {/*auth=true
        sidebar
        fileView
        sideIcon
        
      */}
      {/*not auth: login*/}

     </div>
    </>
  )
}

export default App
