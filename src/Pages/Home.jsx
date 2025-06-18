import React from 'react'
import BtnItem from '../Components/BtnItem'
import { Link } from 'react-router-dom'

const Home = () => {
    const name = "Create Account"
  return (
    <div className="main">
    <div className='home flex items-center justify-end h-[100vh] p-2 w-[87%] m-auto flex-col text-center bg-[#fff]'>
        <h2 className='text-[23px] font-[600] text-[#111827] '>Welcome to PopX</h2>
        <small className='text-gray-400' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam deserunt? Molestias, repellat. Cupiditate, aut.</small>
       <div className="home_btn mt-[2.3rem] mb-[1rem] flex flex-col gap-2 p-4 w-full">
      <Link to={"register"} className='w-full'> <BtnItem name={name}/></Link> 
      <Link  to={"login"}  className='w-full mt-1'>  <button className='bg-violet-100 w-full text-violet-600 p-3 font-[100]' >Already Registered? login</button></Link>
       </div>
    </div>
    </div>
  )
}

export default Home