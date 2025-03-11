import React from 'react'
import ContentHeader from '../contentHeader'
import Projectcard from './projectcard'
import { projects } from '@/store/data'
import Link from 'next/link'
import { HiOutlineArrowRight } from "react-icons/hi";

export default function Project() {
  return (
    <div className="w-full flex flex-col">
            
              <ContentHeader title="My Works "/> 
            
            
           
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          
              {
                
                projects.filter(project => project.main).map((project, index) => {
                 return (<Projectcard key={index} data={project} />)
                })
              }
              
            </div>
            <Link href="/projects" className='self-end pt-4'>
              <button className='group text-white flex items-center gap-2 '>
                <span className='text-base border-transparent border-b group-hover:border-textcontent transition-all'>
                  All Works
                </span>
                <HiOutlineArrowRight className='group-hover:translate-x-1 transition-all' size={12}/>
              </button>
            </Link>
        </div>
  )
}
