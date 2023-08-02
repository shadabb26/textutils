// import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar.js'
import Textform from './Components/Textarea';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';



function App() {
  const [mode,setmode]=useState('light');
  const[alert,setAlert]=useState(null);

  
  const showAlert=(message,type)=>{
  setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
setAlert(null)
},1000)

  }


  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
     // #042743
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode Enabled","success")
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success")
    }
  }
  return (
    <>
     <Navbar title="TextUtils"  about="About us" home="Home" mode={mode} toggleMode={()=>togglemode()}/>
     <Alert alert={alert}/>
     <div className="container"> <Textform mode={mode} showAlert={showAlert}/></div>
   

    {/* <Router>
   

    <Routes>
    <Route path="/" element={<div className="container"> <Textform mode={mode} showAlert={showAlert}/></div>}/>  
    <Route path="/about" element={<About/>}/>
    </Routes>

    </Router> */}
  </>
  );
}

export default App;
