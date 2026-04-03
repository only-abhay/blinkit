import React from 'react'

export default function Hero() {
  return (
    <div className='max-w-7xl mx-auto'>
     <div>
        <img className='' src="../public/img-hero.jpg" alt="" />
     </div>
     <div className='flex gap-x-5 overflow-auto no-scrollbar max-w-312.5 mx-auto'>
        <div className='max-w-84 lg:shrink-0 '><img className='max-h-48.75  w-full ' src="../public/print_crystal_WEB.avif" alt="" /></div>
        <div className='max-w-84 lg:shrink-0 '><img className='max-h-48.75   w-full' src="../public/pharmacy-WEB.avif" alt="" /></div>
        <div className='max-w-84 lg:shrink-0 '><img className='max-h-48.75  w-full' src="../public/pet_crystal_WEB-1.avif" alt="" /></div>
        <div className='max-w-84 lg:shrink-0 '><img className='max-h-48.75   w-full' src="../public/baby_crystal_WEB-1.avif" alt="" /></div>
        
     </div>
    </div>
  )
}
