// import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets.logo} alt="" width={150}/>
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Build by <a href="https://github.com/R-Bhandari">Raghav</a>,<a href="https://github.com/Soumya-2128">Soumya</a> and <a href="https://github.com/TAANISHKA">Tanishka</a></p>
        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt="" width={35} />
            <img src={assets.twitter_icon} alt="" width={35} />
            <img src={assets.instagram_icon} alt="" width={35} />
        </div>
    </div>
  )
}

export default Footer