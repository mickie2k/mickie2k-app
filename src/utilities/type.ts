import { DeveloperIconProps } from "developer-icons/dist/icon"
import { FunctionComponentElement } from "react"

export type TechType = {
    title: string,
    img: (props: DeveloperIconProps) => FunctionComponentElement<DeveloperIconProps>
}

export type ExperienceType = {
    title: string,
    description: string[],
    duration: string,
    link?: string,
}

export type ProjectType = {
    title: string,
    description: string,
    link: string,
    stack: string[]
}