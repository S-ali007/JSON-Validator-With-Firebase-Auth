import All_Components from './Components/All_Components';
import SignupPage from './Features/Signup';
import LoginPopup from './Features/LoginPopup';
import { Route,Routes, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Page_404 from './Components/Page_404';

function App() {
  const[token,setToken]=useState(false)
  const [data,setdata]=useState("")
  

 
  
  return (
    <>
    <Routes>
      <Route path={'/signup'} element={<SignupPage/> }/>
      <Route path={'/'} element={<LoginPopup setToken={setToken} /> }/>
      <Route path={'/home'} element={<All_Components  setdata={setdata}/> }/>
      <Route path={'/*'} element={<Page_404/>}/>
      
    </Routes>




    {/* <All_Components/>  */}
    </>
   
  );
}

export default App;


