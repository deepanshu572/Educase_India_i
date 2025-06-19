import React from 'react'
import BtnItem from '../Components/BtnItem'
import { Link } from 'react-router-dom'

const Home = () => {
    const name = "Create Account"
  return (
    <div className="main">
    <div className='home flex  justify-end h-[100vh] p-4 w-[87%] m-auto flex-col bg-[#F3F4F6]'>
        <h2 className='text-[26px] font-[600] text-[#111827] '>Welcome to PopX</h2>
        <small className='text-gray-400' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam deserunt? Molestias, repellat. Cupiditate, aut.</small>
       <div className="home_btn mt-[2.3rem] mb-[1rem] flex flex-col gap-2 w-full">
      <Link to={"register"} className='w-full'> <BtnItem name={name}/></Link> 
      <Link  to={"login"}  className='w-full mt-1'>  <button className='bg-violet-100 font-bold w-full text-violet-600 p-3 ' >Already Registered? login</button></Link>
       </div>
    </div>
    </div>
  )
}

export default Home