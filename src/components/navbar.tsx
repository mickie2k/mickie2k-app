import React from 'react'
import Image from 'next/image'
import logo from '@/img/mickie2klogosquare.png'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
   
    <div className='pointer-events-auto absolute sm:fixed flex flex-row p-4  justify-between w-full z-50 '>
      <Link href="/"  className='flex flex-row items-center gap-4 hover:-rotate-3 transition'>
         <Image className='w-10' src={logo} width={100} height={100} alt='Mickie2kWebsiteLogo'/>
         <span className='text-textcontent '>MICKIE2K.</span>
      </Link>
      <div className='flex flex-row gap-2 items-center'>
        <Link href="/projects" className='flex justify-center px-5 text-highlight bg-foreground py-2 items-center rounded-lg transition hover:bg-mist duration-100 hover:scale-105'>
          <span className='text-base '>All Works</span>
      </Link>
     
      </div>
      
    </div> 
    <div className="z-30 pointer-events-none fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] "></div>
    </>
  )
}
