import React, { useState, useEffect } from 'react';

const HeroFull = ({hero, heroText}) => {


    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${hero})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full">
                    <h1 className="mb-5 text-5xl w-full">{heroText}</h1>
                </div>
            </div>
        </div>
    )
};


export default HeroFull