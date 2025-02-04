import React from 'react'

export default function ProjectTechstack({data}:{data:string}) {
  return (
    <span className='text-xs text-textcontent bg-background px-3 py-1 rounded-full'>{data}</span>
  )
}
