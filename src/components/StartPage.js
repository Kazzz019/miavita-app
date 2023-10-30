import React from 'react'
import { useNavigate } from 'react-router-dom'; 


  
function StartPage() {
    const navigate = useNavigate();  
  return (
   <div className=''>
    <div className="min-h-screen flex items-center justify-center bg-white-100">
      <div className="text-center">
        <img src="logo_fix.jpg" alt="Example Image" className=" w-100 h-100 px-12 mx-auto mb-8 mt-5 md:w-150 h-auto md:h-200"/>
        <h1 className=' text-5xl lg:text-7xl my-36 font-black '>40代からの<br/>キャリア健康診断</h1>
        <button type="button" className="text-white backgroundColor hover:bg-gradient-to-br font-bold rounded-lg text-lg px-8 py-6 text-center mr-2 mb-2 " onClick={() => navigate('/questions')}>今すぐチェックする</button>
        <footer className='mt-10 text-center'> © mea vita All Rights Reserved.</footer>
      </div>
    </div>
   </div>
   
  )
}

export default StartPage