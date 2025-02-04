import React from 'react'
import Tech from './tech'
import { techStack } from '@/store/data'
import ContentHeader from '../contentHeader'
export default function Skills() {

  return (
    <div className="w-full gap-4 flex flex-col">
    <ContentHeader title="Skills"/>
    <div className='grid grid-cols-3 sm:grid-cols-5 gap-y-8'>
        {techStack.map((tech, index) => (
            <Tech key={index} data={tech} />
        ))}
    </div>
</div>
  )
}
