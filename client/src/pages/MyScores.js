import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import HeroHalf from '../components/HeroHalf'
import Footer from '../components/Footer'
import myScoresHero from '../assets/images/myscores-hero.jpg'
import ScoreHistory from '../components/ScoreHistory'

export default function MyScores() {

    const heroText = {
        header: "View all of your past scores",
        text: " "
    }

    return (
        <div >
            <HeroHalf heroText={heroText} hero={myScoresHero}/>
            <ScoreHistory />

        </div>
    )
}