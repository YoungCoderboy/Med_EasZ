import { Link, Outlet } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import Sidebar from './Sidebar'

const SharedLayout = () => {
  const { openSidebar, openModal, userSignOut } = useGlobalContext()
  return (
    <>
      <Sidebar />
      <button className="sidebar-toggle" onMouseEnter={openSidebar}>
        <FaBars />
      </button>
      <Link to="/">
        <button type="submit" onClick={userSignOut}>
          Logout
        </button>
      </Link>
      <section className="section">
        <Outlet />
      </section>
    </>
  )
}
export default SharedLayout
