import React from 'react'
import Menu from "../../public/menu.png"
import { useState } from 'react'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  const closeMenu = () => {
    setOpenMenu(false)
  }

  return (
    <div>
    <div className=' flex justify-between px-8'>
      <div className=' flex justify-between items-center w-full py-3 md:w-[60%] lg:w-[50%] xl:w-[40%]'>
        <div>
          <h2 className=' font-[600] text-[30px] md:text-[20px]lg:text-[30px] xl:text-[40px]'>snap</h2>
        </div>
        <div className=' hidden md:flex text-[13px] gap-6 xl:text-[16px]'>
          <a href="#">Features</a>
          <a href="#">Company</a>
          <a href="#">Career</a>
          <a href="#">About</a>
        </div>
        <div>
          <img src={Menu} alt="" className=' w-[25px] md:hidden' onClick={toggleMenu}/>
        </div>
      </div>
      <div className=' hidden md:flex items-center text-[13px] gap-6 lg:gap-14 xl:text-[16px]'>
        <a href="#">Login</a>
        <button className=' border py-1 px-2 xl:px-4 rounded-[7px]'>Register</button>
      </div>



</div>
      {openMenu && (
  <div className=' absolute right-0 flex flex-col bg-gray-200  w-[40%] h-full top-0'>
    <p onClick={closeMenu} className=' flex justify-end px-5 cursor-pointer text-red-600 font-bold text-3xl my-3'>X</p>
    <div className='flex flex-col items-start gap-4 p-4 text-[14px]'>
      <a href="#">Features</a>
      <a href="#">Company</a>
      <a href="#">Career</a>
      <a href="#">About</a>
      <hr className='w-full' />
      <a href="#">Login</a>
      <button className='border py-1 px-4 rounded-[7px]'>Register</button>
    </div>
  </div>
)}
    </div>
  )
}

export default Navbar