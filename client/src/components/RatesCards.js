import React, { useState, useEffect } from 'react';
import rates from '../assets/images/rates.jpg'
import {Link} from 'react-router-dom'

const RatesCards = () => {

    return (
        <div className="flex flex-col w-full lg:flex-row overflow-hidden
        border-b-solid border-b-cultured2 border-b-4 ">
            <div className="grid flex-grow w-full lg:w-1/3 h-[500px] card bg-isles-green rounded-none place-items-center "> 
                <div className="text-center text-cultured2 w-4/5">
                    <h3 className="text-3xl mb-10">Affordable Rates</h3>
                    <p className="mb-20">Even while hosting PGA events we offer both affordable weekday and weekend rates for Florida residents.</p>
                    <Link as={Link} to="/rates"><button className="text-lg transition duration-500 border-b-2 border-transparent hover:border-isles-blue">See Rates</button></Link>
                </div>
            </div>
            <div className="grid flex-grow w-full lg:w-2/3 h-[500px] card bg-isles-green rounded-none place-items-center lg:border-l-solid lg:border-l-cultured2 lg:border-l-4 border-t-solid border-t-cultured2 border-t-4 lg:border-t-0">                
            <div className="h-full w-full hover:scale-125 duration-[3000ms]"
            style={{backgroundImage: `url(${rates})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            </div>
            </div>
        </div>
    )
};

export default RatesCards