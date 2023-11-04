import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import Modal from './Modal'
import Sidebar from './Sidebar'
import axios from 'axios'
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()
  const url =
    'https://newsapi.org/v2/everything?q=healthcare&sortBy=publishedAt&apiKey=be87e6e7b44b49aeb4e67770508ac240'

  const [Data, setData] = useState([])
  const [Loading, setLoading] = useState(false)
  const getFeeds = async () => {
    try {
      const response = await axios.get(url)
      const result = await response.data
      setData(result.articles)
      Data.slice(20)
      console.log(Data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getFeeds()
  }, [])

  return (
    <main>
      <Sidebar />
      <div className="feeds">
        <div className="home-heading">
          <h3>Get the Latest Medical Updates Here!!</h3>
        </div>
        {Data.map((dt, ind) => {
          const { title, content, urlToImage, url } = dt
          if (title === 'Removed') return
          return (
            <div className="feed" key={ind}>
              <img src={urlToImage} alt={title} />
              <p>
                {title}...<a href={url}>Know More about it!!</a>
              </p>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Home
