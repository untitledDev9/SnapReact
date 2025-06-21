import React from 'react'
import HeroImg from "../../public/image-hero-desktop.png"
import HeroImgMobile from "../../public/image-hero-mobile.png"

const Hero = () => {
    return (
        <div className=' bg-amber-200 sm:bg-green-400 md:bg-red-600 lg:bg-blue-600 xl:bg-purple-700 flex flex-col items-center mt-5 gap-6'>
             <div className=' w-[80%]'>
                <img src={HeroImgMobile} alt=""  className=' '/>
            </div>
            <div className=' flex flex-col justify-center text-center px-5 items-start gap-4 '>
                <h1 className=' text-[3.5rem] font-[600] leading-18'>Make 
                    remote work</h1>
                <p className=' text-2xl text-[#6d6d6d] leading-7 '>
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className=' bg-black mt-8 text-white rounded-xl py-4 px-7 mx-auto'>Learn more</button>
            </div>
            <div className=' hidden'>
                <img src={HeroImg} alt=""  className=' '/>
            </div>
           
        </div>
    )
}

export default Hero