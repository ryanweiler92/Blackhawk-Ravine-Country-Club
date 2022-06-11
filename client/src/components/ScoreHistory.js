import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries'
import Auth from '../utils/auth'
import login2 from '../assets/images/login2.jpg'


const ScoreHistory = () => {

    //query to get user info
    const { data: userDataMe } = useQuery(GET_ME);
    const user = userDataMe?.me.scores;

    //state variable to pass to round modal component
    const [roundInfo, setRoundInfo] = useState({});
    const [roundDate, setRoundDate] = useState({})
    const [roundScore, setRoundScore] = useState({})

    const [showModal, setShowModal] = useState(false)

    const roundHandler = (scores, total, date) => {
        console.log(scores)
        setRoundInfo(scores)
        setRoundDate(date)
        setRoundScore(total)
        setShowModal(true)
    }

    const modalHandler = () => {
        setShowModal(false)
    }

    const myFunction = () => {
        console.log(roundInfo)
        console.log(user)
        console.log(showModal)
    }

    return (

        <div className="container mt-10 mb-20">
            {Auth.loggedIn() ? (
                <></>
                ):
                (            
            <div className="alert alert-error shadow-lg mb-6 ">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Please login or create an account to view scores.</span>
                </div>
            </div>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
        {user?.map((score) => {
            return (
            <div className="card w-96 bg-base-100 shadow-xl image-full mt-4" key={score._id}>
                <figure><img src={login2}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{score.createdAt.split(" ").slice(0, 3).join(" ")}</h2>
                    <h2 className="card-title">Total Score: {score.totalScore}</h2>
                    <div className="card-actions justify-end">
                    <button htmlFor="my-modal" className="btn bg-isles-blue modal-button" onClick={(e) => roundHandler(score.holesScore, score.totalScore, score.createdAt)}>View Round</button>
                    </div>
                </div>
            </div>
            )
            })}

            </div>
            {!showModal ? (
            null
            ):(
            <>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal modal-open w-full h-full overflow-auto">
                    
                <div className="modal-box relative w-full h-auto bg-cultured2">
                <h1 className="text-center text-3xl font-bold">My Round</h1>
                <div className="grid grid-cols-1 mt-3">
                    <span className="text-center text-lg">Total Score: {roundScore}</span>
                    <span className="text-center text-lg">Date: {roundDate.split(" ").slice(0, 3).join(" ")}</span>
                </div>
                <div className="grid grid-cols-1">
                <div className="overflow-x-auto mt-2">
                    <table className="table-fixed lg:table-auto w-full text-sm md:text-lg lg:text-xl mt-10">
                        <thead>
                            <tr className="text-center">
                                <th className="w-[65px] md:w-auto">Hole</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-cultured2 text-center">
                                <td className="bg-golf-blue">Blue</td>
                                <td className="bg-golf-blue">516</td>
                                <td className="bg-golf-blue">350</td>
                                <td className="bg-golf-blue">195</td>
                                <td className="bg-golf-blue">523</td>
                                <td className="bg-golf-blue">415</td>
                                <td className="bg-golf-blue">398</td>
                                <td className="bg-golf-blue">360</td>
                                <td className="bg-golf-blue">213</td>
                                <td className="bg-golf-blue">373</td>
                            </tr>
                            <tr className="text-center">
                                <td>White</td>
                                <td>488</td>
                                <td>316</td>
                                <td>166</td>
                                <td>491</td>
                                <td>390</td>
                                <td>366</td>
                                <td>335</td>
                                <td>186</td>
                                <td>346</td>
                            </tr>
                            <tr className="text-center text-cultured2">
                                <td className="bg-golf-red">Red</td>
                                <td className="bg-golf-red">460</td>
                                <td className="bg-golf-red">314</td>
                                <td className="bg-golf-red">156</td>
                                <td className="bg-golf-red">462</td>
                                <td className="bg-golf-red">363</td>
                                <td className="bg-golf-red">325</td>
                                <td className="bg-golf-red">326</td>
                                <td className="bg-golf-red">175</td>
                                <td className="bg-golf-red">333</td>
                            </tr>
                            <tr className="text-center text-cultured2">
                                <td className="bg-khaki">Handicap</td>
                                <td className="bg-khaki">10</td>
                                <td className="bg-khaki">12</td>
                                <td className="bg-khaki">14</td>
                                <td className="bg-khaki">16</td>
                                <td className="bg-khaki">8</td>
                                <td className="bg-khaki">18</td>
                                <td className="bg-khaki">2</td>
                                <td className="bg-khaki">6</td>
                                <td className="bg-khaki">4</td>
                            </tr>
                            <tr className="text-center font-extrabold">
                                <td>Score</td>
                                <td>{roundInfo[0]}</td>
                                <td>{roundInfo[1]}</td>
                                <td>{roundInfo[2]}</td>
                                <td>{roundInfo[3]}</td>
                                <td>{roundInfo[4]}</td>
                                <td>{roundInfo[5]}</td>
                                <td>{roundInfo[6]}</td>
                                <td>{roundInfo[7]}</td>
                                <td>{roundInfo[8]}</td>
                            </tr>
                            <tr className="text-center">
                                <td className="bg-golf-light-green">Par</td>
                                <td className="bg-golf-light-green">5</td>
                                <td className="bg-golf-light-green">4</td>
                                <td className="bg-golf-light-green">3</td>
                                <td className="bg-golf-light-green">5</td>
                                <td className="bg-golf-light-green">4</td>
                                <td className="bg-golf-light-green">4</td>
                                <td className="bg-golf-light-green">4</td>
                                <td className="bg-golf-light-green">3</td>
                                <td className="bg-golf-light-green">4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="overflow-x-auto mt-5">
                    <table className="table-fixed lg:table-auto w-full text-sm md:text-lg lg:text-xl mt-3 lg:mt-10">
                        <thead>
                            <tr className="text-center">
                                <th className="w-[65px] md:w-auto">Hole</th>
                                <th>10</th>
                                <th>11</th>
                                <th>12</th>
                                <th>13</th>
                                <th>14</th>
                                <th>15</th>
                                <th>16</th>
                                <th>17</th>
                                <th>18</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-cultured2 text-center">
                                <td className="bg-golf-blue">Blue</td>
                                <td className="bg-golf-blue">410</td>
                                <td className="bg-golf-blue">510</td>
                                <td className="bg-golf-blue">430</td>
                                <td className="bg-golf-blue">190</td>
                                <td className="bg-golf-blue">518</td>
                                <td className="bg-golf-blue">463</td>
                                <td className="bg-golf-blue">378</td>
                                <td className="bg-golf-blue">213</td>
                                <td className="bg-golf-blue">363</td>
                            </tr>
                            <tr className="text-center">
                                <td>White</td>
                                <td>383</td>
                                <td>473</td>
                                <td>366</td>
                                <td>163</td>
                                <td>490</td>
                                <td>433</td>
                                <td>345</td>
                                <td>190</td>
                                <td>342</td>
                            </tr>
                            <tr className="text-center text-cultured2">
                                <td className="bg-golf-red">Red</td>
                                <td className="bg-golf-red">317</td>
                                <td className="bg-golf-red">465</td>
                                <td className="bg-golf-red">312</td>
                                <td className="bg-golf-red">149</td>
                                <td className="bg-golf-red">468</td>
                                <td className="bg-golf-red">390</td>
                                <td className="bg-golf-red">280</td>
                                <td className="bg-golf-red">179</td>
                                <td className="bg-golf-red">293</td>
                            </tr>
                            <tr className="text-center text-cultured2">
                                <td className="bg-khaki">Handicap</td>
                                <td className="bg-khaki">5</td>
                                <td className="bg-khaki">9</td>
                                <td className="bg-khaki">13</td>
                                <td className="bg-khaki">15</td>
                                <td className="bg-khaki">3</td>
                                <td className="bg-khaki">1</td>
                                <td className="bg-khaki">7</td>
                                <td className="bg-khaki">17</td>
                                <td className="bg-khaki">11</td>
                            </tr>
                            <tr className="text-center font-extrabold">
                                <td>Score</td>
                                <td>{roundInfo[9]}</td>
                                <td>{roundInfo[10]}</td>
                                <td>{roundInfo[11]}</td>
                                <td>{roundInfo[12]}</td>
                                <td>{roundInfo[13]}</td>
                                <td>{roundInfo[14]}</td>
                                <td>{roundInfo[15]}</td>
                                <td>{roundInfo[16]}</td>
                                <td>{roundInfo[17]}</td>
                            </tr>
                            <tr className="text-center">
                                <td className="bg-golf-light-green">Par</td>
                                <td className="bg-golf-light-green">4</td>
                                <td className="bg-golf-light-green">5</td>
                                <td className="bg-golf-light-green">4</td>
                                <td className="bg-golf-light-green">3</td>
                                <td className="bg-golf-light-green">5</td>
                                <td className="bg-golf-light-green">4</td>
                                <td className="bg-golf-light-green">4</td>
                                <td className="bg-golf-light-green">3</td>
                                <td className="bg-golf-light-green">4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            <div className="modal-action">
            </div>
                <button onClick={modalHandler} className="btn">Close</button>
            </div>
                </div>
                </div>
            </>
            )
            }
        </div>
        
    )

}


export default ScoreHistory
