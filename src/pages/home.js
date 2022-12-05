import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app, db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
  getAuth
} from "firebase/auth";
import Navbar from "../components/navbar";


const usersCollectionRef = collection(db, "users");

export default function Home() {

  const [users, setUsers] = useState([]);
  
  let navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect((users) => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);


  return (
    <div>
      <Navbar />
      <main>
        <h1>Home</h1>
      </main>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
