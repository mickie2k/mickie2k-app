import React, { useCallback } from "react";

import { ProjectType } from "@/utilities/type";

import Image from "next/image";

import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from '@/components/carousel/carouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '@/components/carousel/carouselArrowButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'



interface ProjectCarouselProps {
  data: ProjectType;
  options?: EmblaOptionsType
}

export default function ProjectCarousel(props: ProjectCarouselProps) {

    const  options = props.options
    const slides = props.data.img
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  
    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return
  
      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop
  
      resetOrStop()
    }, [])
  
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
      emblaApi,
      onNavButtonClick
    )
  
    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)
  
    if(slides) return (
           
     
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides?.map((img,index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number"> <Image src={img} width={1920}   alt={`img-${props.data.title}-${index}`} /></div>
              </div>
            ))}
          </div>
        </div>
       
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
  
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot '.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
        
      </section>
    )
    else return;


}
