import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import { Content } from '../components/Content/Content';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import Carousel from '../components/Carousel/Carousel';
// import img  from '../src/components/course_bg.jpg';
// import img  from '../../src/components/course_bg.jpg';
const Home = () => {
    return (
       <>
       <Hero />
       <Features/>
       <Content {...heroOne}/>
       <Content  {...heroTwo}/>
       <Content {...heroThree}/>
       <Carousel/>
       </>
    )
}

export default Home;