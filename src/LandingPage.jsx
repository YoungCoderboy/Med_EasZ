import Navbar from './components/Navbar'

import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import AuthDetails from './components/AuthDetails'
// import Analytics from './components/Analytics'

function LandingPage() {
  return (
    <div className="App">
      <Navbar />

      <Newsletter />
      <AuthDetails />

      <Footer />
    </div>
  )
}

export default LandingPage
