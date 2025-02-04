import { TechType } from '@/utilities/type'


export default function Tech({ data }: { data: TechType }) {
   

  return (
    <div className='flex flex-col items-center gap-2 w-auto '>
        <div className='w-8 h-8'>
          
            <data.img size={32}/>
        </div>
        <span className='text-sm text-textcontent'>{data.title}</span>
    </div>
  )
}
