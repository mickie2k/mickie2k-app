import ContentHeader from "./contentHeader";

export default function About() {
  return (
    <div className="w-full flex flex-col ">
      <ContentHeader title="About me" />
      <p className="text-textcontent text-base">Howdy, I&apos;m Ball, a <span className="text-highlight">Computer Science</span> student at <span className="text-highlight">KMITL</span>.
        I&apos;m passionate about building and designing <span className="text-highlight">real-world applications and scalable services</span>, and I&apos;m currently focused on growing as a <span className="text-highlight">Software Engineer</span>.</p>
    </div>
  )
}
