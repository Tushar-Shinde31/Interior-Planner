import React from 'react'
import HeroImage from '../../assets/hero.png'

const Hero = () => {
  return (
    <>
    <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* text section */}
            <div className='flex flex-col justify-center gap-5'>
                <h1 className='text-4xl md:text-5xl font-bold leading-tight'>SKETCH LUXURY INTERIOR DESIGN</h1>
                <p className='text-sm md:text-base text-gray-500 max-w-[500px]'>Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.</p>
                <div className='space-x-4'>
                    <button className='primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]'>
                        Get Started
                    </button>
                    <button className='primary-btn uppercase'>Contact US</button>
                </div>
            </div>
            {/* image section */}
            <div className='flex justify-center md:justify-end'>
                <img src={HeroImage} alt="hero" className='w-full max-w-[500px] object-cover rounded-lg' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
