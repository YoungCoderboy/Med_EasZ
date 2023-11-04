import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import Documents from './pages/Documents'
import Reminder from './pages/Reminder'
import SharedLayout from './SharedLayout'
import Prediction from './pages/Prediction'
import LandingPage from './LandingPage'
import Signup from './Signup'
import Main from './Main'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/home" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/home/upload" element={<Documents />} />
            <Route path="/home/reminder" element={<Reminder />} />
            <Route path="/home/predict" element={<Prediction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
