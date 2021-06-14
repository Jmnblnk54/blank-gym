import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "./hero.css";

import  JandJ1 from '../assets/JandJ1.jpg';
import  JandJ2 from '../assets/JandJ2.jpg';
import  JandJ3 from '../assets/JandJ3.jpg';
import  JandJ4 from '../assets/JandJ4.jpg';
import  JandJ5 from '../assets/JandJ5.jpg';
import  JandJ6 from '../assets/JandJ6.jpg';
import  JandJ7 from '../assets/JandJ7.jpg';
import  JandJ8 from '../assets/JandJ8.jpg';
import  JandJ9 from '../assets/JandJ9.jpg';
import  JKB1 from '../assets/JKB1.jpg';
import  JKB2 from '../assets/JKB2.jpg';
import  JKB3 from '../assets/JKB3.jpg';
import  JKB4 from '../assets/JKB4.jpg';
import  JKB5 from '../assets/JKB5.jpg';
import  JKB6 from '../assets/JKB6.jpg';
import  JKB7 from '../assets/JKB7.jpg';
import  JMB1 from '../assets/JMB1.jpg';
import  JMB2 from '../assets/JMB2.jpg';
import  JMB3 from '../assets/JMB3.jpg';
import  JMB4 from '../assets/JMB4.jpg';
import  JMB5 from '../assets/JMB5.jpg';
import  JMB6 from '../assets/JMB6.jpg';
import  JMB7 from '../assets/JMB7.jpg';


const items = [
    {
        src: JMB5,
        altText: 'Julia with Barbie weight',
        
        key: 1
    },
    {
        src: JandJ8,
        altText: 'Josh coaching Julia',
    },
    {
        src: JandJ9,
        altText: 'Julia coaching Josh',
    },
    {
        src: JandJ7,
        altText: 'Julia laughing at Josh',
    },
    // {
    //     src: '../assets/005sm.jpg',
    //     altText: 'Slide 3',
    //     caption: 'Slide 3'
    // },
    // {
    //     src: '../assets/006sm.jpg',
    //     altText: 'Slide 3',
    //     caption: 'Slide 3'
    // },
    // {
    //     src: './assets/007sm.jpg',
    //     altText: 'Slide 3',
    //     caption: 'Slide 3'
    // }
];

const PhotoToggle = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
        );
    });

    return (
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default PhotoToggle;