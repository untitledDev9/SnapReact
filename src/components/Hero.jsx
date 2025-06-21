import React from 'react'
import HeroImg from "../../public/image-hero-desktop.png"

const Hero = () => {
    return (
        <div className=' flex justify-between items-center w-[80%] bg-amber-400 mx-auto '>
            <div className=' flex flex-col items-start gap-10 w-[70%] bg-green-400'>
                <h1 className=' text-[8rem] font-[600] leading-18'>Make <br />
                    remote work</h1>
                <p className=' text-3xl text-[#6d6d6d]'>
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className=' bg-black text-white rounded-xl py-4 px-7'>Learn more</button>
            </div>
            <div className=' w-1/2'>
                <img src={HeroImg} alt=""  className=' w-[50%]'/>
            </div>
        </div>
    )
}

export default Hero