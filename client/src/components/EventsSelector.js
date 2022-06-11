import React, { useState, useEffect } from 'react';
import wedding from '../assets/images/wedding.jpg'
import corporate from '../assets/images/corporate.jpg'
import banquet from '../assets/images/banquet.jpg'

const EventsSelector = () => {

    

    const eventItems = {
        weddings: {
            header: "Weddings",
            text: "Floor-to-ceiling windows provide breathtaking views of the lake in the 4,500 square-foot ballroom, designed in warm earth tones with a wood-inlay in the ceiling and dimmable chandeliers to create a romantic atmosphere. This inviting room can accommodate up to 250 guests for a plated dinner reception and cocktails.",
            image: wedding
        },
        corporate: {
            header: "Corporate Events",
            text: "Our spacious meeting rooms are fully equipped with all the state-of-the-art audio/visual equipment to meet your needs. Let our professional convention services staff assist you in planning your event, from business seminars and testimonial dinners to themed parties and special events, ensuring that every detail is executed to your specifications.",
            image: corporate
        },
        banquets: {
            header: 'Banquets',
            text: "Enjoy your next banquet in our 50,000 square-foot clubhouse which features a magnificent wooded setting on over 900 acres. The beautiful lakefront deck is complemented by an exquisite ballroom serving world-class, innovative contemporary cuisine.",
            image: banquet
        }
    };

    const [event, setEvent] = useState(eventItems.weddings)

    const eventHandler = async (e) => {
        setEvent(e)
    }

    

    return (
        <div className="container lg:w-2/3 mt-10 mb-5 lg:mb-20">
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:h-[350px]">
                <div className="flex justify-center">
                    <ul className="menu menu-compact lg:menu-normal lg:h-2/3 bg-isles-gray w-56 p-2 rounded-box text-cultured2">
                        <li className="place-items-center" onClick={(e) => {eventHandler(eventItems.weddings)}}>
                            <a><p className="lg:text-2xl text-center">Weddings</p></a>
                        </li>
                        <li className="place-items-center" onClick={(e) => {eventHandler(eventItems.corporate)}}>
                            <a><p className="lg:text-2xl text-center">Corporate Events</p></a>
                        </li>
                        <li className="place-items-center" onClick={(e) => {eventHandler(eventItems.banquets)}}>
                            <a><p className="lg:text-2xl text-center">Banquets</p></a>
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <h3 className="text-center lg:text-2xl">{event.header}</h3>
                    <p className="text-center lg:text-xl mt-4">{event.text}</p>
                </div>
                <div className="flex justify-center items-top">
                    <img src={event.image} className="object-fit rounded h-2/3" />
                </div>
            </div>
        </div>
    )
}

export default EventsSelector