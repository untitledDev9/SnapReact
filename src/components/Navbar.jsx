import React from 'react'

const Navbar = () => {
    return (
        <div className=' flex justify-between items-center py-2 px-32'>
            <div className=' flex justify-between items-center w-[40%]'>
                <div>
                    <h2 className=' font-[600] text-[65px]'>snap</h2>
                </div>
                <div className=' font-bold text-2xl flex gap-8 text-[#6d6d6d] '>
                    <a href="#">Features</a>
                    <a href="#">Company</a>
                    <a href="#">Career</a>
                    <a href="#">About</a>
                </div>
            </div>
            <div className=' font-bold text-2xl flex items-center w-[16%] justify-between text-[#6d6d6d]'>
                <a href="#">Login</a>
                <button className=' border py-3 px-7 rounded-2xl'>Register</button>
            </div>
        </div>
    )
}

export default Navbar