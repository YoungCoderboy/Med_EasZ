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
      <section className="section">
        <Outlet />
      </section>
    </>
  )
}
export default SharedLayout
