import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { SAVE_SCORE } from '../utils/mutations';
import { GET_ME } from '../utils/queries'
import thanks from '../assets/images/thanks.jpg'
import Auth from '../utils/auth'
import {Link} from 'react-router-dom'


const VirtualScorecard = () => {

    //state variable to show thank you screen after submitting score
    const [thankYouScreen, showThankYouScreen] = useState(false)

    //query to get user info (for _id)
    const { data: userDataMe } = useQuery(GET_ME);
    const user = userDataMe?.me._id;

    //mutation to save scorecard scores
    const [saveScore, { error }] = useMutation(SAVE_SCORE)

    //state object to hold the scores as user enters them
    const [score, setScore] = useState(
        {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "",
        10: "", 11: "", 12: "", 13: "", 14: "", 15: "", 16: "", 17: "", 18: ""}
        )
    
    //state variable to display the total score as user enters them
    const [totalScore, setTotalScore] = useState(0)

    //state array variable to hold scores for each hole when we send mutation
    const [finalScores, setFinalScores] = useState([])

    //updating state object each time user enters hole score
    const scoreChange = (hole, holeScore) => {
        setScore(prevState => ({
            ...prevState, [hole]: holeScore
        }))
    }

    //update total score each time user enters score by looping through state object
    useEffect(() => {
        const setRunningScore = async () => {
            let runningScore = 0
            for (const [key, value] of Object.entries(score)){
                if (value != ""){
                const numberValue = parseInt(value)
                runningScore = runningScore + numberValue
                }
            }
            setTotalScore(runningScore)
        }
        setRunningScore();
    }, [score])
    
    //on submit, checks for empty inputs and pushes values to array
    const scoreHandler = () => {
        //check for empty inputs
        for (const [key, value] of Object.entries(score)){
            if (value == ""){
                console.log('NO')
            break; } else {
                const numberValue = parseInt(value)
                setFinalScores(oldArray => [...oldArray, numberValue])
            }
        }
    }

    //waiting until the hole scores are all pushed to the finalScores array
    //had some problems with scoreSubmit function running before this was finished
    useEffect(() => {
        if(finalScores.length == 18){
            scoreSubmit()
        } }, [finalScores])

    //submitting info to the saveScore mutation
    const scoreSubmit = async () => {
        console.log(finalScores)
        try {
            const mutationResponse = await saveScore({
                variables: { totalScore: totalScore, holesScore: [...finalScores.map((score)=> {
                    return (score)
                })], 
                            userID: user}
            });
            console.log(mutationResponse.data)
        } catch (e) {
            console.error({error});
        }
        showThankYouScreen(true)
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
                  <span>Please login or create an account before entering a score.</span>
                </div>
            </div>
            )}
            <h1 className="font-eagle-lake text-xl lg:text-4xl text-center">Blackhawk Ravine Virtual Scorecard</h1>
            {!thankYouScreen ? 
            <>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="overflow-x-auto mt-5">
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
                            <tr className="text-center">
                                <td>Score</td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="1" onChange={(e) => scoreChange(1, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="2" onChange={(e) => scoreChange(2, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="3" onChange={(e) => scoreChange(3, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="4" onChange={(e) => scoreChange(4, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="5" onChange={(e) => scoreChange(5, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="6" onChange={(e) => scoreChange(6, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="7" onChange={(e) => scoreChange(7, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="8" onChange={(e) => scoreChange(8, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="9" onChange={(e) => scoreChange(9, e.target.value)}/></td>
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
                            <tr className="text-center">
                                <td>Score</td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="10" onChange={(e) => scoreChange(10, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="11" onChange={(e) => scoreChange(11, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="12" onChange={(e) => scoreChange(12, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="13" onChange={(e) => scoreChange(13, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="14" onChange={(e) => scoreChange(14, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="15" onChange={(e) => scoreChange(15, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="16" onChange={(e) => scoreChange(16, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="17" onChange={(e) => scoreChange(17, e.target.value)}/></td>
                                <td><input type="text" className="input input-bordered w-full max-w-xs" id="18" onChange={(e) => scoreChange(18, e.target.value)}/></td>
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
            </div>
            <div className="grid grid-cols-2 mt-4">
                <div className="flex justify-center align-center">
                    <div className="stats shadow bg-cultured-2">
                        <div className="stat">
                            <div className="stat-title text-center">Total Score</div>
                            <div className="stat-value text-center">{totalScore}</div>
                        </div>
                    </div>
                </div>
                {Auth.loggedIn() ? (
                <div className="flex justify-center align-center mt-4">
                <button className="btn bg-isles-green border-0"
                onClick={scoreHandler}>Submit Score</button>
                </div>
                ):(
                    <></>
                )}
            </div>
            </>
            :
            <section className="bg-cultured2 mt-5">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
            <div className="flex justify-center xl:w-1/2">
                <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src={thanks} alt="" />
            </div>
            
            <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl">
                    Thank you for submitting your score!
                </h2>

                <p className="block max-w-2xl mt-4 text-xl text-gray-500">You can enter another score below or checkout all of the scores you have entered.</p>
                
                <div className="mt-6 sm:-mx-2">
                    <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                        <Link to="/scores" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-isles-green text-cultured2 sm:w-auto">

                            <span className="mx-2">
                                Enter Another Score
                            </span>
                        </Link>
                    </div>

                    <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                        <Link to="/myscores" class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-isles-blue text-cultured2">
                            <span className="mx-2">
                                Check Out My Scores
                            </span> 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        }
        </div>
    )
};

export default VirtualScorecard