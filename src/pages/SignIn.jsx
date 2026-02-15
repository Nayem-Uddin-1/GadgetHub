import React, { useState } from 'react';
import { HiUser, HiMail, HiPhone, HiLockClosed } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../components/common/Container/Container';
import TitlePage from './TitlePage';
import { useDispatch } from 'react-redux';
import { setUser } from '../Redux/userSlice';



const SignIn = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()



  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  const randomNumber = Math.floor(100000 + Math.random() * 900000);


  const handleSubmit = (e) => {
    e.preventDefault()

    const userInfo = {
      name: name,
      id: randomNumber,
      email: email,
      password: password
    }

    dispatch(setUser(userInfo))

    console.log("user", userInfo);

    // navigate("/login");

  }

  return (
    <section>

      <TitlePage title={"Sign-in"} />


      <Container>
        <div className="flex items-center justify-center p-6 font-sans">
          <div className="w-full max-w-4xl p-8 ">
            <form className="space-y-8">

              {/* Personal Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="text-gray-700 text-sm">First Name</label>
                  <div className="md:col-span-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-2 border border-gray-300 rounded focus:border-blue-400 outline-none transition-all"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="text-gray-700 text-sm">
                    E-Mail <span className="text-red-500 font-bold">*</span>
                  </label>
                  <div className="md:col-span-3">
                    <input
                      type="email"
                      placeholder="E-Mail"
                      className="w-full p-2 border border-gray-300 rounded focus:border-blue-400 outline-none transition-all"
                      onChange={(e) => setEmail(e.target.value)}

                    />
                  </div>
                </div>

                {/* Password Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="text-gray-700 text-sm">
                    Password <span className="text-red-500 font-bold">*</span>
                  </label>
                  <div className="md:col-span-3 relative">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-2 border border-gray-300 rounded focus:border-blue-400 outline-none transition-all"
                      onChange={(e) => setPassword(e.target.value)}

                    />
                  </div>
                </div>


              </div>

              {/* Footer Actions */}
              <div className="pt-6 space-y-4">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded cursor-pointer" />
                  <p>
                    I have read and agree to the <a href="#" className="text-blue-500 border-b border-dotted border-blue-500 hover:text-blue-700">Privacy Policy</a>
                  </p>
                </div>

                <div className="flex justify-center">
                  <button onClick={handleSubmit}
                    type="submit"
                    className="w-full bg-[#1a1a1a] text-white px-12 py-3 font-semibold uppercase tracking-tight hover:bg-black transition-colors flex items-center justify-center space-x-2"
                  >
                    Continue
                  </button>
                </div>


              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignIn;