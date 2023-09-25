import React from 'react'
import { useNavigate } from 'react-router-dom'; 


  
function StartPage() {
    const navigate = useNavigate();  
  return (
   <div className=''>
    <div className="min-h-screen flex items-center justify-center bg-white-100">
      <div className="text-center">
        <img src="logo_fix.jpg" alt="Example Image" className=" w-250 h-300 px-5 mx-auto mb-8"/>
        <h1 className=' text-3xl  sm:text-7xl my-36 font-black header'>40代からのキャリア診断</h1>
        <button type="button" className="text-white backgroundColor hover:bg-gradient-to-br font-medium rounded-lg text-lg px-6 py-4 text-center mr-2 mb-2 " onClick={() => navigate('/questions')}>今すぐチェックする</button>
        <footer className='mt-10 text-center'> © mea vita All Rights Reserved.</footer>
      </div>
    </div>
   </div>
   
  )
}

export default StartPage