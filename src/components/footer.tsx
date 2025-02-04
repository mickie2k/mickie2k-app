"use client"
import { useState} from 'react'
import { IoCopyOutline, IoCheckmarkDone  } from "react-icons/io5";

export default function Footer() {
    const [tooltip, setTooltip] = useState<string>('');
    const email = 'tpookongmek@gmail.com'
    const copyToClipboard = async () => {
        navigator.clipboard.writeText(email)
        setTooltip('Copied!');
        
    }


  return (
    <div className='flex flex-col items-center justify-center pt-28 pb-28 gap-4'>
        <h1 className='text-xl font-bold'>Get in touch</h1>
        <p className='text-textcontent'>Let&apos;s connect! Feel free to reach out </p>
        <button 
            
            className=' flex flex-row gap-4 items-center py-2 px-7 bg-white rounded-lg text-black  hover:scale-110 transition  hover:bg-zinc-200 relative cursor-pointer '
            onMouseEnter={() => setTooltip('Copy')}
           onMouseLeave={() => setTooltip('')}
            onClick={() => {
              copyToClipboard();
            
            }}
        >

            <span className='font-normal text-lg'> tpookongmek@gmail.com</span>     
                   
            {tooltip=="Copied!" ? 
             <IoCheckmarkDone/> :  <IoCopyOutline/> 
            }
             
            
                <span className={`absolute bottom-full left-1/2 mb-2 px-2 py-1 -translate-x-1/2 text-sm text-white bg-mist transition transform  ${tooltip ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} rounded`}>
                  {tooltip}
                </span>
            
        </button>

       
    </div>
  )
}
