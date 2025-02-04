import ContentHeader from "../contentHeader";
import ExperienceList from "./experienceList";

export default function Experience() {
  return (
    <div className="w-full flex flex-col ">
        <ContentHeader title="Experience"/>
        <ExperienceList/>
    </div>
  )
}
