"use client"

import ExperienceCard from './experienceCard'
import { experience } from '@/store/data'


export default function ExperienceList() {

   
    return (
    <div className='flex flex-col '>
        {experience.map((exp, index) => (
            <ExperienceCard key={index} data={exp} />
        ))}
        
    </div>
    
  )
}
