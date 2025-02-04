import Image from 'next/image'
import mickie2k from '@/img/mickie2k.png'

export default function Title() {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <div className='w-20 rounded-full overflow-hidden border-2 border-transparent outline outline-1 outline-white'>
        <Image src={mickie2k}
          width={200}
          height={200}
          alt="Picture of the author"/>
      </div>
      <div className='flex flex-col items-center'>
      <h1 className="text-2xl">Tanakorn Pookongmek</h1>
      <span className='text-textcontent'>Fullstack Developer</span>
      </div>
  </div>
 
  )
}
