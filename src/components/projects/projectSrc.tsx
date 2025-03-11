

import { SrcType } from '@/utilities/type'
import React from 'react'

import { CiGlobe } from "react-icons/ci";

import { SrcEnum } from '@/utilities/enum';
import { FaGithub,FaFigma } from 'react-icons/fa';




interface ProjectSrcProps {
  data: SrcType[]
}


export default function ProjectSrc(props: ProjectSrcProps) {


  const srcEnumMap = new Map<SrcEnum, React.ComponentType<any>>([
    [SrcEnum.GITHUB, FaGithub],
    [SrcEnum.WEBSITE, CiGlobe],
    [SrcEnum.FIGMA, FaFigma],
  ]);



  return (
    <div className='flex gap-4 w-full flex-wrap justify-end pt-1'>

      {props.data.map((src, index) => {
        const Icon = srcEnumMap.get(src.src);
        if (!Icon) return null; // Handle the case where the icon is not found

        return (
          <a href={src.link} key={index} target='_blank' className='flex items-center gap-2  text-textcontent border border-mist py-1 px-3 rounded-md hover:bg-mist transition-all ease-in-out duration-75'>
            <Icon size={16} />
            <span className='text-sm'>{src.title}</span>
          </a>
        )
      })}


    </div>
  )
}



