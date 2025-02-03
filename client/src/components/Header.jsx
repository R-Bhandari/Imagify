// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
            <p>Best Text to Image Generator</p>
            <img src={assets.star_icon} alt="star_icon" />
        </div>

        <h1 className='text-4xl max-w-[590px] sm:text-7xl sm:max-w[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-600'>image</span>, in Seconds!</h1>

        <p className='text-center max-w-xl mx-auto mt-5'>Unlash your creativity with AI. Turn your Imagination into visual art in seconds - just type, and watch the magic happen</p>

        <button onClick={() => navigate('/result')} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-700' >
            Generate Images
            <img className='h-6' src={assets.star_group} alt="star_group" />
        </button>
        <div className='flex flex-wrap justify-center mt-16 gap-3'>
          {Array(6).fill('').map((items, index)=>(
            <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index % 2== 0? assets.sample_img_2 : assets.sample_img_1}
            alt='' key={index} width={70}/>
          ))}
        </div>
        <p className='mt-2 text-neutral-600'>Generated images from imagify</p>
    </div>
  )
}

export default Header