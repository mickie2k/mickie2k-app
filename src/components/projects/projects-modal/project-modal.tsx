import React from "react";

import { ProjectType } from "@/utilities/type";
import ProjectTechstack from "../projecttechstack";
import { EmblaOptionsType } from "embla-carousel";
import ProjectCarousel from "./project-carousel";
import { IoIosClose } from "react-icons/io";
import ProjectSrc from "../projectSrc";
interface ProjectModalProps {
  data: ProjectType;
  closeModal: () => void;
}

export default function ProjectModal({ data, closeModal }: ProjectModalProps) {
  const OPTION: EmblaOptionsType = { loop: true };
  return (
    <div className="max-w-5xl p-9 h-sc sm:max-h-[90vh] flex flex-col items-start   gap-5  ">
      <div className="flex  justify-between items-start gap-2 w-full">
        <h1 className="text-xl text-start w-full">{data.title}</h1>
        <button onClick={closeModal} className=" text-textcontent hover:bg-mist transition duration-75 rounded-full">
          <IoIosClose size={32} />{" "}
        </button>
      </div>

      <ProjectCarousel data={data} options={OPTION} />

      <div className="flex flex-col gap-3 w-full">
        <div>
          <p className="text-textcontent font-normal text-sm text-ellipsis overflow-hidden">
            {data.description}
          </p>
        </div>

        <div className="flex gap-2 w-full flex-wrap pt-1">
          {data.stack.map((tech, index) => (
            <ProjectTechstack key={index} data={tech} />
          ))}
        </div>
        <hr className="border-mist" />
        
          {data.src && <ProjectSrc data={data.src} key={data.title} />}
       
      </div>
    </div>
  );
}
