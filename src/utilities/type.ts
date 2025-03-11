import { DeveloperIconProps } from "developer-icons/dist/icon"
import { ReactElement } from "react"
import { SrcEnum } from "./enum"
import { StaticImageData } from "next/image"

export type TechType = {
    title: string,
    img: (props: DeveloperIconProps) => ReactElement<DeveloperIconProps, React.FunctionComponent<DeveloperIconProps>>
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
    src?: SrcType[],
    stack: string[],
    img?: StaticImageData[],
    main : boolean
}

export type SrcType = {
    title: string,
    src: SrcEnum,
    link: string
}