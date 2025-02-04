import ContentHeader from "./contentHeader";

export default function About() {
  return (
    <div className="w-full flex flex-col ">
        <ContentHeader title="About me"/>
        <p className="text-textcontent text-base">Howdy, I'm Ball, a <span className="text-highlight">Computer Science</span> student at <span className="text-highlight">KMITL</span>. I love developing and design <span className="text-highlight">web applications</span> ever since I was in high school.</p>
    </div>
  )
}
