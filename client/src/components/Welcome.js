import React, { useState, useEffect } from 'react';
import overhead from '../assets/images/overhead.jpg'

const Welcome = () => {

    return (

        <div className="flex flex-col w-full lg:flex-row overflow-hidden border-t-solid border-t-cultured2 border-t-4 border-b-solid border-b-cultured2 border-b-4 ">
            <div className="grid w-full lg:w-1/2 flex-grow h-[500px] card bg-isles-green rounded-none place-items-center">
            <div className="text-center text-cultured2 w-4/5">
                <h3 className="text-3xl mb-1">Welcome to </h3>
                <h1 className="text-4xl mb-10 font-eagle-lake"> Blackhawk Ravine Country Club</h1>
                <p className="text-lg">Located in the heart of Orlando, Blackhawk Ravine is the home to 
                    finest golf course in Florida. Set near Lake Buena Vista lies 18
                    challenging holes of golf that gives even the best pros a challenging
                    experience. Blackhawk Ravine has hosted over 20 PGA Tour events since
                    it's inaguration in 1992 and still hosts events to this day.
                </p>
                </div>
            </div>
            <div className="grid w-full lg:w-1/2 flex-grow h-[500px] card bg-isles-green rounded-none place-items-center 
            lg:border-l-solid lg:border-l-cultured2 lg:border-l-4 overflow-hidden border-t-solid border-t-cultured2 border-t-4
            lg:border-t-0">
                <div className="h-full w-full hover:scale-125 duration-[3000ms]"
                style={{backgroundImage: `url(${overhead})`, backgroundPosition: 'bottom', backgroundSize: 'cover'}}>
                </div>
            </div>  
        </div>

    )
};

export default Welcome;