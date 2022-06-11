import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import HeroHalf from '../components/HeroHalf'
import EventsSelector from '../components/EventsSelector'
import Footer from '../components/Footer'
import eventsHero from '../assets/images/events-hero.jpg'

export default function Events() {

    const heroText = {
        header: "Host your Wedding with Us",
        text: "We host many different events including weddings, graduations, birthdays and more."
    }

    return (
        <div>
            <HeroHalf heroText={heroText} hero={eventsHero}/>
            <EventsSelector />
        </div>

    )
}