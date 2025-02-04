"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import legoYellowStud from '@/img/legostud-yellow.jpg'
import './lego.css'
import { ExperienceType } from '@/utilities/type';
import { GoLinkExternal } from 'react-icons/go'

export default function ExperienceCard({ data }: { data: ExperienceType }) {
    const experienceCardRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        const adjustHeight = () => {

            const cardHeight = experienceCardRef.current?.offsetHeight || 0;
            const newHeight = Math.floor(cardHeight / 24) * 24;
            console.log('Adjust', cardHeight)
            setHeight(newHeight);

        }
        adjustHeight();
        const handleResize = () => adjustHeight();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', adjustHeight);
        }
    }, [])
    return (
        <div className='flex flex-row gap-4' style={{ height: `${height}px` }}>

            <div className='relative h-full w-[26px] basis-[26px] grow-0 shrink-0 '>

                <div className="legoStud shadow-md" style={{ height: `${height}px` }} ></div>
                <div className='w-[13px] absolute left-[13px] top-0 shadow-md'><Image src={legoYellowStud} width={26} height={26} alt="" /></div>
            </div>
            <div ref={experienceCardRef} className='h-fit pb-8 w-full'>
                <div className='w-full'>
                    {data.link ?
                        <a href={data.link} target='_blank' rel='noreferrer' className='hover:underline group'>
                            <h1 className='flex-row flex gap-2 text-white text-base font-normal leading-4  text-wrap mb-2'>
                                {data.title}
                                <GoLinkExternal className='group-hover:translate-x-1 group-hover:-translate-y-1 transition' />
                            </h1>
                        </a> :
                        <h1 className='text-white text-base font-normal leading-4 text-wrap mb-2'>{data.title}</h1>}
                    <ul className='list-disc pl-4 text-textcontent font-normal text-base'>
                        {data.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>

    )
}
