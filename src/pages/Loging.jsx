import React, { useState } from 'react'
import Breadcrumb from '../components/singleproduct/Breadcrumb'
import TitlePage from './TitlePage'
import Container from '../components/common/Container/Container'
import { Link, useNavigate } from 'react-router-dom'

import { RiArrowRightSLine } from 'react-icons/ri';
import { useSelector } from 'react-redux'

function Loging() {


    const navigate = useNavigate()

    // const user = useSelector((state) => state.user.users)

    const user = useSelector((state => state.user.users))


    console.log("User", user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



    const handleLogin = (e) => {
        e.preventDefault();

        if (user.email === email && user.password === password) {
            navigate("/")
        }
        else {
            console.log("Error , fill input again");
        }        

    };



    return (
        <section>

            <TitlePage title={"Account Login"} />

            <Container>

                <div className="flex items-center justify-center">
                    {/* login section */}
                    <div className="w-full max-w-lg p-8 rounded">

                        {/* Header */}
                        <h2 className="text-2xl font-bold text-[#333] mb-10">
                            Returning Customer
                        </h2>

                        <div className="space-y-6">
                            {/* E-Mail Input Group */}
                            <div className="grid grid-cols-1 group md:grid-cols-3 items-center">
                                <label className="text-gray-600 text-sm mb-1 md:mb-0">
                                    E-Mail
                                </label>
                                <div className="md:col-span-2">
                                    <input
                                        type="email"
                                        placeholder="E-Mail Address"
                                        className="w-full px-3 py-2 border border-[#ddd] rounded-sm text-sm focus:outline-none focus:border-blue-400 placeholder-[#999] group-hover:border-blue-400"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Password Input Group */}
                            <div className="grid grid-cols-1 group md:grid-cols-3 items-center">
                                <label className="text-gray-600 text-sm mb-1 md:mb-0">
                                    Password
                                </label>
                                <div className="md:col-span-2">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-3 py-2 border border-[#ddd] rounded-sm text-sm focus:outline-none focus:border-blue-400 placeholder-[#999] group-hover:border-blue-400"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Forgotten Password Link */}

                            <div className="mt-5 ">
                                <a
                                    href="#"
                                    className="text-[#337ab7] border-b border-dotted border-[#337ab7] hover:text-[#23527c] text-[14px] transition-colors"
                                >
                                    Forgotten Password
                                </a>
                            </div>

                            {/* Login Button */}
                            <div className="">
                                <button onClick={handleLogin} className="w-full cursor-pointer bg-[#1c1f23] text-white py-3 px-4 rounded-sm flex items-center justify-center font-bold text-sm tracking-wide hover:bg-[#0C3D78] transition-colors uppercase">
                                    Login

                                </button>
                            </div>
                        </div>

                    </div>
                    {/* signin section */}
                    <div className="w-full max-w-lg p-8 rounded">

                        {/* Header */}
                        <h2 className="text-2xl font-bold text-[#333] mb-10">
                            New Customer
                        </h2>

                        <div className="space-y-6">
                            {/* E-Mail Input Group */}

                            <p className='my-17 text-gray-600'>
                                By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                            </p>

                            {/* Login Button */}
                            <div className="">
                                <button className="w-full cursor-pointer hover:bg-[#0C3D78] bg-[#1c1f23] text-white py-3 px-4 rounded-sm flex items-center justify-center font-bold text-sm tracking-wide transition-colors uppercase">
                                    <Link to={"/register"}>
                                        Continue
                                    </Link>

                                </button>
                            </div>
                        </div>

                    </div>
                </div>


            </Container>


        </section>
    )
}

export default Loging