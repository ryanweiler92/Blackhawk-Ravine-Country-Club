import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth'
import {Link} from 'react-router-dom'




const Nav = () => {


        return (
            <div className="navbar bg-cultured2 pb-0 pt-0 pr-0 mr-auto max-h-[64px] min-h-[64px] sticky top-0 z-10" >
                <div className="navbar-start">
                    <Link as={Link} to="/" ><p className="text-center normal-case text-sm font-bold w-28 pl-0 mb-0 text-isles-blue font-eagle-lake sm:pl-2  md:text-lg lg:text-xl xl:text-2xl sm:ml-0 sm:w-auto">Blackhawk Ravine Country Club</p></Link>
                </div>
                <div className="navbar-end mr-0">
                    <div className="navbar-end hidden mr-0 lg:flex">
                        <ul className="menu menu-horizontal p-0 rounded-none hover:rounded-none">
                            
                            <li className="text-center"><Link className="text-center" as={Link} to="/events" style={{ borderRadius: '0px' }}>Weddings &amp; Events</Link></li>
                            <li className="text-center"><Link className="text-center" as={Link} to="/rates" style={{ borderRadius: '0px' }}>Rates</Link></li>
                            <li className="text-center"><Link className="text-center" as={Link} to="/scores" style={{ borderRadius: '0px' }}>Enter Score</Link></li>
                            <li className="text-center"><Link className="text-center" as={Link} to="/myscores" style={{ borderRadius: '0px' }}>View Scores</Link></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost mr-5 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cultured2 rounded-box w-40">
                            
                            <li className="text-center"><Link as={Link} to="/events">Weddings &amp; Events</Link></li>
                            <li className="text-center"><Link as={Link} to="/rates">Rates</Link></li>
                            <li className="text-center"><Link as={Link} to="/scores">Enter Score</Link></li>
                            <li className="text-center"><Link as={Link} to="/myscores">View Your Scores</Link></li>
                        </ul>
                    </div>
                    {Auth.loggedIn() ? (
                    <a onClick={Auth.logout} className="btn bg-isles-green border-transparent rounded-none h-[64px]"
                    >Logout</a>
                    ) : (
                    <Link as={Link} to="/login" 
                    ><p className="btn bg-isles-green border-transparent rounded-none h-[64px]">Login</p></Link>
                    )} 
                </div>

            
            </div>
        )
};

export default Nav