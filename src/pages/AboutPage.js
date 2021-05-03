import React from 'react';

import AboutImg from '../images/aboutBcg.jpeg';

import Info from '../components/AboutPage/Info';
import Hero from '../components/Hero';

export default function AboutPage() {
  return (
    <>
      <Hero img={AboutImg} />
      <Info />
    </>
  );
}
