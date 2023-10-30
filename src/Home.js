import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <Sidebar />
      <button className="sidebar-toggle" onMouseEnter={openSidebar}>
        <FaBars />
      </button>
      <div className="home-heading">
        <h3>Enjoy your latest medical feeds here!!</h3>
      </div>
    </main>
  );
};

export default Home;
