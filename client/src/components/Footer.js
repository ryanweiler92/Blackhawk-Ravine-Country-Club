import React, { useState, useEffect } from 'react';
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'

const Footer = () => {

    return (
        <footer className="bg-cultured2 p-10 flex justify-between items-center max-h-[7rem]">
            <div>
                <h3 className="text-isles-blue text-center font-eagle-lake sm:pl-2 md:text-lg lg:text-2xl">Blackhawk Ravine Country Club</h3>
                <p className="text-center mt-1">1 Blackhawk Ravine, Orlando, FL 01234</p>
            </div>
            <div className="flex flex-row">
                <a href="https://github.com/ryanweiler92/Blackhawk-Ravine-Country-Club" target="_blank" rel="noreferrer">
                    <img src={github} className="hover:scale-125 duration-[3000ms]" />
                </a>
                <a href="https://www.linkedin.com/in/ryanweiler92/" target="_blank" rel="noreferrer">
                    <img src={linkedin} className="hover:scale-125 duration-[3000ms]"/>
                </a>
            </div>

        </footer>
    )

};

export default Footer