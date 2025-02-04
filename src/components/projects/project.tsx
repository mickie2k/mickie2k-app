import React from 'react'
import ContentHeader from '../contentHeader'
import Projectcard from './projectcard'
import { projects } from '@/store/data'

export default function Project() {
  return (
    <div className="w-full flex flex-col">
            <ContentHeader title="Projects "/>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          
              {
                projects.map((project, index) => (
                  <Projectcard key={index} data={project} />))
              }
              
            </div>
        </div>
  )
}
