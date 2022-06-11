import React, { useState, useEffect } from 'react';

const HeroHalf = ({hero, heroText}) => {



    return (
        <div className="hero h-[50vh]" style={{backgroundImage: `url(${hero})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full">
                    <h1 className="mb-5 text-5xl w-full">{heroText.header}</h1>
                    <p className="text-lg lg:text-2xl" >{heroText.text}</p>
                </div>
            </div>
        </div>
    )
};

export default HeroHalf