import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import axios from "axios";
const AuthDetails = () => {
  const { setAuthUser, authUser } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log(user);

        navigate("/home");
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  
};
export default AuthDetails;
