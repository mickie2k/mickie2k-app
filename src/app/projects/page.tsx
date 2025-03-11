import ContentHeader from "@/components/contentHeader";

import { HiOutlineChevronLeft } from "react-icons/hi2";
import Projectcard from "@/components/projects/projectcard";
import Image from "next/image";
import IconLego from "@/img/icon.png";
import { projects } from "@/store/data";
import Link from "next/link";


export default function ProjectPage() {
  return (
    <div className="bg-background px-6 xl:px-0 ">
        <div className="max-w-7xl mx-auto pt-16 sm:pt-28 flex flex-col gap-2">
                    
                    <div className='sticky justify-end sm:justify-between -top-1 py-4 backdrop-blur-md -mx-6 px-6 w-screen sm:top-0 sm:w-auto sm:py-0 sm:pb-4 sm:px-0 sm:mx-0 sm:relative sm:backdrop-blur-0 flex flex-row gap-3  items-center z-30'>
                      <Link href="/" className="flex gap-2 items-center group cursor-pointer">
                        <div className="items-center bg-foreground p-2 rounded-full hidden group-hover:bg-mist transition-all duration-150 sm:flex"><HiOutlineChevronLeft /></div>
                        <span className="group-hover:opacity-100 group-hover:translate-x-0 opacity-0  -translate-x-2  text-textcontent  transition-all duration-300">Back</span>
                      </Link>

                        <div className="flex flex-row gap-3 items-center">
                  
                        <h1 className="text-xl font-bold">All Works</h1>
                        <Image className='w-6' src={IconLego} width={50} height={50} alt='legoicon'/> 
                        </div>
                    </div>
                               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                             
                                 {
                                   projects.map((project, index) => (
                                     <Projectcard key={index} data={project} />))
                                 }
                                 
                        </div>
            </div>
            
    </div>
  );
}
