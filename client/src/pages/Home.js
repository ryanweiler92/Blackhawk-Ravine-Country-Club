import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import HeroFull from '../components/HeroFull'
import Welcome from '../components/Welcome'
import WeddingCards from '../components/WeddingCards'
import RatesCards from '../components/RatesCards'
import ScoresCards from '../components/ScoresCards'
import Footer from '../components/Footer'
import homeHero from '../assets/images/hero.jpg'

const heroText = "Welcome to Florida's Finest"


export default function Home() {
  return (
    <div >
    <HeroFull hero={homeHero} heroText={heroText} />
    <Welcome /> 
    <WeddingCards />
    <RatesCards />
    <ScoresCards />
    </div>
  )
}
