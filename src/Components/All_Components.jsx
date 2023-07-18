import React from 'react'
import Header from './Header'
import Main_content from './Main_content'
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function All_Components() {
  const navigate = useNavigate();

  useEffect(()=>{
    
    if (!localStorage.getItem("useremail")){
      navigate("/")
    }
  }
  ,[])
  return (
    <div className='max-w-[1440px] w-full mx-auto px-3 py-1  '>
        <Header/>
        <Main_content />



    </div>
  )
}

export default All_Components
