import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import HeroHalf from '../components/HeroHalf'
import RateTable from '../components/RateTable'
import Footer from '../components/Footer'
import ratesHero from '../assets/images/rates-hero.jpg'

export default function Rates() {
    
    const heroText = {
        header: "Great Course, Better Rates",
        text: "Affordable weekday and weekend rates"
    }

    const weekdayRates = {
        nineWalkReg: "$35",
        nineWalkSenior: "$25",
        nineCartReg: "$45",
        nineCartSenior: "$35",
        eighteenWalkReg: "$70",
        eighteenWalkSenior: "$50",
        eighteenCartReg: "$90",
        eighteenCartSenior: "$70"
    }

    const weekendRates = {
        nineWalkReg: "$50",
        nineWalkSenior: "$40",
        nineCartReg: "$65",
        nineCartSenior: "$55",
        eighteenWalkReg: "$100",
        eighteenWalkSenior: "$80",
        eighteenCartReg: "$130",
        eighteenCartSenior: "$110"
    }
    
    return (
        <div>
            <HeroHalf heroText={heroText} hero={ratesHero}/>
            <div className="container lg:w-3/4 mt-4 mb-10">
                <div className="flex justify-center mb-2">
                    <h2 className="text-xl lg:text-3xl">Weekday Rates</h2>
                </div>
                <RateTable rates={weekdayRates}/>
                <div className="flex justify-center mt-4 mb-2">
                    <h2 className="text-xl lg:text-3xl">Weekend Rates</h2>
                </div>
                <RateTable rates={weekendRates}/>
            </div>
        </div>

    )
}