import React from 'react'
import Image from 'next/image'
import IconLego from '@/img/icon.png'
export default function ContentHeader({title}: {title: string}) {
  return (
    <div className='sticky -top-1 py-4 backdrop-blur-md -mx-6 px-6 w-screen sm:top-0 sm:w-auto sm:py-0 sm:pb-4 sm:px-0 sm:mx-0 sm:relative sm:backdrop-blur-0 flex flex-row gap-3 items-center z-30'>
        <Image className='w-6' src={IconLego} width={50} height={50} alt='legoicon'/> 
        <h1 className="text-xl font-bold">{title}</h1>
        
    </div>
  )
}
