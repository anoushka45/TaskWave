import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        username: ''
    });

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const submit = async (e) => {
        await axios.post("http://localhost:3000/api/v1/register", inputs).then((response)=>{
            console.log(response);
            if(response.data.message==="User already exists"){
                alert(response.data.message);

            }
            alert(response.data.message);
            setInputs({
                email: '',
                password: '',
                username: ''
            })
            history("/signin")
        })
        e.preventDefault();
        
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 animate-fade-in bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Sign up today!
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            

                            <div className="my-12 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2">
                                   sign up with e-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white input-signup"
                                    type="text"
                                    name="username"
                                    placeholder="Name"
                                    onChange={change}
                                    value={inputs.username}
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 input-signup"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={change}
                                    value={inputs.email}
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 input-signup"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={change}
                                    value={inputs.password}
                                />
                                <button
                                    onClick={submit}
                                    className="mt-5 tracking-wide font-semibold bg-[#bc6c25] text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                        <circle cx="8.5" cy="7" r="4"></circle>
                                        <path d="M20 8v6M23 11h-6"></path>
                                    </svg>
                                    <span className="ml-3">Sign Up</span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by StrayCare's{" "}
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>{" "}
                                    and its{" "}
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-egg text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat flex justify-center items-center">
                        <img src="./pic.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
