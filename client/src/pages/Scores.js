import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import HeroHalf from '../components/HeroHalf'
import VirtualScorecard from '../components/VirtualScorecard'
import Footer from '../components/Footer'
import scoresHero from '../assets/images/scores-hero.jpg'



export default function Scores() {

    const heroText = {
        header: "Keep track of your scores",
        text: "One home for all of your scores from Blackhawk Ravine"
    }

    return (
        <div>
            <HeroHalf heroText={heroText} hero={scoresHero}/>
            <VirtualScorecard />
        </div>
    )

};

