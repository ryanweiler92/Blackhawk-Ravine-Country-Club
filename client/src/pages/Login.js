import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import login1 from '../assets/images/login1.jpg'
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS } from '../utils/queries';
import { LOGIN } from '../utils/mutations';
import { REGISTER } from '../utils/mutations';
import Auth from '../utils/auth'




export default function Login() {

    const [login, { error }] = useMutation(LOGIN);
    const [register, { error2 }] = useMutation(REGISTER);
    const [formState, setFormState] = useState({ username: "", password: ""});
    const [showAlertSignUp, setShowAlertSignUp] = useState(false);
    const [showAlertLogin, setShowAlertLogin] = useState(false);
    


    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const mutationResponse = await login({
                variables: { username: formState.username, password: formState.password },
            });
            console.log(mutationResponse)
            const token = mutationResponse.data.signin.token;
            Auth.login(token);
            console.log(token)
        } catch (e) {
            console.error(e);
            setShowAlertLogin(true);
        }
    };

    const handleRegisterFormSubmit = async (event) => {
        event.preventDefault();
        try {
          const mutationResponse = await register({
            variables: { username: formState.username, password: formState.password },
          });
          console.log(mutationResponse)
          const token = mutationResponse.data.register.token;
          Auth.login(token);
          console.log(token)
        } catch (err) {
          console.error(err);
          setShowAlertSignUp(true);
        }
      }

    return (
        <div>
            <div className="bg-no-repeat bg-cover bg-center relative" style={{backgroundImage: `url(${login1})`}}><div className="absolute bg-gradient-to-b from-isles-green to-isles-blue opacity-75 inset-0 z-0"></div>
                <div className="min-h-screen flex flex-row mx-0 justify-center">
                    <div className="flex-col flex  self-center p-10 sm:max-w-5xl md:max-w-sm xl:max-w-2xl lg:max-w-xl z-10">
                        <div className="self-start hidden md:flex lg:flex flex-col text-white">
                        <img src="" className="mb-3" />
                        <h1 className="mb-3 font-bold text-3xl lg:text-5xl text-cultured2 font-eagle-lake xl:leading-[3.5rem]">Blackhawk Ravine Country Club </h1>
                        <p className="pr-3 text-cultured2">Please login to access member features such as inputing scores. If you do not have an
                        account yet please use the 'Sign Up' button to create one.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mr-[75px] sm:mr-[75px] md:mr-0 self-center z-10 mt-20">
                        <div className="p-12 bg-cultured2 mx-auto rounded-2xl w-100 ">
                            <div className="mb-4">
                                <h3 className="font-semibold text-2xl text-gray-800">Login </h3>
                                <p className="text-gray-500">Please login to your account.</p>
                            </div>
                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide" htmlFor="username">Username</label>
                                        <input className=" w-full text-base px-4 py-2 border form-control border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" 
                                        onChange={handleChange} name="username" value={formState.username} placeholder="Enter your username" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                        </label>
                                        <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" 
                                        onChange={handleChange} value={formState.password} name="password" placeholder="Enter your password" />
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-black-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                        disabled={!(formState.username && formState.password)}
                                        onClick={handleFormSubmit}>
                                        Login
                                        </button>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-black-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                        disabled={!(formState.username && formState.password)}
                                        onClick={handleRegisterFormSubmit}>
                                        Sign Up
                                        </button>
                                    </div>
                                    <div>
                                    {showAlertSignUp ? (
                                        <div className="container" id="alertbox">
                                            <div className="container flex items-center text-white text-sm font-bold relative"
                                            role="alert"
                                            onClose={() => setShowAlertSignUp(false)} show={showAlertSignUp}>
                                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path
                                                d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                                                </svg>
                                                <p>Something went wrong with your signup!</p>
                                            </div>
                                        </div>
                                    ):( null)}
                                    {showAlertLogin ? (
                                    <div className="container" id="alertbox">
                                        <div className="container flex items-center text-white text-sm font-bold relative"
                                        role="alert"
                                        onClose={() => setShowAlertLogin(false)} show={showAlertLogin}>
                                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                            d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                                            </svg>
                                            <p>Invalid Login Credentials!</p>
                                        </div>
                                    </div>
                                    ):( null)}
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}