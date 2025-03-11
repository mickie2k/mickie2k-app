import ContentHeader from "./contentHeader";

export default function About() {
  return (
    <div className="w-full flex flex-col ">
        <ContentHeader title="About me"/>
        <p className="text-textcontent text-base">Howdy, I&apos;m Ball, a <span className="text-highlight">Computer Science</span> student at <span className="text-highlight">KMITL</span>. 
        I&apos;ve been passionate about developing and designing <span className="text-highlight">web applications</span> since high school, and I&apos;m aspiring to grow into a <span className="text-highlight">Full-stack Developer</span></p>
    </div>
  )
}
