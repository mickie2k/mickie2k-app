import { ProjectType } from '@/utilities/type'
import React from 'react'
import ProjectTechstack from './projecttechstack'

export default function Projectcard({data}:{data:ProjectType} ) {
  return (
    <div className='w-full gap-4 h-auto sm:gap-0 sm:h-56 bg-foreground  p-4 rounded-lg flex flex-col justify-between  '>
        <div>
            <h1>{data.title}</h1>
            <p className='text-textcontent font-normal text-sm text-ellipsis overflow-hidden'>{data.description}</p>
        </div>
        <div className='flex gap-2 w-full flex-wrap'>
            
            {data.stack.map((tech, index) => (
                <ProjectTechstack key={index} data={tech} />
            ))}
            
        </div>
    </div>
  )
}
