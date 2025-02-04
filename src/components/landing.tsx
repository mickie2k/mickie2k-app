
import Title from "./title"
import About from "./about"
import Skills from "./skills/skills"
import Experience from "./experience/experience"
import Project from "./projects/project"

export default function Landing() {
  
    return (
      
        <div className="max-w-[600px] mx-auto pt-28 flex flex-col items-center gap-10">
         <Title/>
          <About/>
          <Experience/>
          <Project/>
          <Skills/>
        </div>
      
    )
  
}
