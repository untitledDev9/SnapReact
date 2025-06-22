import React from 'react'
import One from "../../public/client-databiz.svg"
import Two from "../../public/client-audiophile.svg"
import Three from "../../public/client-meet.svg"
import Four from "../../public/client-maker.svg"

const Footer = () => {
  return (
    <div className=' md:hidden mt-14 flex justify-evenly items-center'>
        <img src={One} alt="" />
        <img src={Two} alt="" />
        <img src={Three} alt="" />
        <img src={Four} alt="" />
    </div>
  )
}

export default Footer