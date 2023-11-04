import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import sup from '../media/sup2.json'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

// import { Link } from 'react-router-dom';

const Nsup = () => {
  const history = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const signUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        useCredential._tokenResponse.displayName = name
        console.log(useCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="w-full text-white bg-[#25274d]">
      <div>
        <Lottie
          animationData={sup}
          className="border-white w-1/2 h-3/10 ml-96 mb-20"
        />
      </div>
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            For those who make decisions that count
          </h1>
          <p>Sign up to stay update.</p>
        </div>
        <form onSubmit={signUp}>
          <div className="my-4">
            <div className="flex flex-col items-center justify-between w-full">
              <div className="flex flex-row">
                <h2 className="mt-2 mr-3 ml-6 text-2xl w-28"> Name : </h2>
                <input
                  className="ml-1 mb-3 px-3 py-2 text-black w-72 h-10"
                  type="name"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
              </div>
              <div className="flex flex-row">
                <h2 className="mt-2 mr-3 ml-6 text-2xl w-28"> Email : </h2>
                <input
                  className="ml-1 mb-3 px-3 py-2 text-black w-72 h-10"
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <div className="flex flex-row">
                <h2 className="mt-2 text-2xl w-32">Password : </h2>
                <input
                  className="ml-4 px-3 text-black w-72 h-10"
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <div className="mt-8">
                Already have an account{' '}
                <button className="text-[#00df9a]">Login</button>
              </div>
              <Link to="/home">
                <button
                  onSubmit={signUp}
                  className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
                >
                  Signup
                </button>
              </Link>
            </div>
            <p>
              We care bout the protection of your data. Read our{' '}
              <span className="text-[#00df9a]">Privacy Policy.</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Nsup
