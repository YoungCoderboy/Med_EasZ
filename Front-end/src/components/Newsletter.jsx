import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';

const Newsletter = () => {
  const history = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isValidEmail = (email) => {
    // Email validation logic, you can use a regular expression or any other method
    // Here's a simple example using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  async function submit(e) {
    e.preventDefault()
    if (!email || !password) {
      alert('Please enter both email and password.')
      return
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.')
      return
    }

    try {
      await axios
        .post('http://localhost:8000/', {
          email,
          password,
        })
        .then((res) => {
          if (res.data === 'exist') {
            history('/home', { state: { id: email } })
          } else if (res.data === 'notexist') {
            alert('User has not signed up')
          }
        })
        .catch((e) => {
          alert('wrong details')
          console.log(e)
        })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='w-full py-16 text-white px-4 bg-[url("./1.jpeg")]'>
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Stay Healthy with Us !
          </h1>
          <p>Sign up to our medical app and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col items-center justify-between w-full">
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
                className="ml-5 px-3 text-black w-72 h-10"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <div className="mt-8 ml-20">
              Don't have an account ?{' '}
              <Link to="/signup" className="text-[#00df9a]">
                Signup
              </Link>
            </div>
            <button
              className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-20 my-6 px-6 py-3"
              onClick={submit}
            >
              Login
            </button>
          </div>
          <p className="ml-20">
            We care about the protection of your data. Read our{' '}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
