import React from 'react'
import HeroImg from "../../public/image-hero-desktop.png"

const Hero = () => {
    return (
        <div className=' flex justify-between items-center w-[80%] bg-amber-400 mx-auto '>
            <div className=' w-[70%] bg-green-400'>
                <h1 className=' text-[10rem] font-[600] w-[97%] leading-32'>Make
                    remote work</h1>
                <p>
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button>Learn more</button>
            </div>
            <div className=' w-1/2'>
                <img src={HeroImg} alt=""  className=' w-[50%]'/>
            </div>
        </div>
    )
}

export default Hero