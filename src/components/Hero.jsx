import React from 'react'
import HeroImg from "../../public/image-hero-desktop.png"
import HeroImgMobile from "../../public/image-hero-mobile.png"
import One from "../../public/client-databiz.svg"
import Two from "../../public/client-audiophile.svg"
import Three from "../../public/client-meet.svg"
import Four from "../../public/client-maker.svg"

const Hero = () => {
  return (
    <div className=' flex flex-col items-center mt-5 gap-6 
    
     md:flex-row md:w-[80%] mx-auto
    '>
      <div className=' w-[80%] md:hidden'>
        <img src={HeroImgMobile} alt="" className=' ' />
      </div>
      <div className=' flex flex-col justify-center items-center text-center px-5 gap-4  
      
      
md:w-[70%] md:items-start md:text-left
      
      
     lg:w-[80%] lg:gap-10'>
        <h1 className=' text-[3.5rem] font-[600] leading-18
         md:text-[30px] md:leading-8
       lg:w-[72%] lg:text-[6rem] lg:leading-17 '>Make
          remote work</h1>
        <p className=' text-2xl text-[#6d6d6d] leading-7 
         md:text-xl
       lg:text-2xl lg:w-[70%]'>
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button className=' bg-black mt-8 text-white rounded-xl py-4 px-7 mx-auto
        
       md:mx-0
       
       lg:mt-1'>Learn more</button>
      <div className=' mt-10 md:w-16 gap-4 flex justify-evenly items-center'>
              <img src={One} alt="" />
              <img src={Two} alt="" />
              <img src={Three} alt="" />
              <img src={Four} alt="" />
          </div>

      </div>
      <div className=' hidden md:flex w-[500px]'>
        <img src={HeroImg} alt="" className=' ' />
      </div>



    </div>
  )
}

export default Hero