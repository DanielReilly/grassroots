import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//eslint-disable-next-line
import Navbar from "../components/Navbar";


export default function Dashboard() {

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



  return (
    <>
    <Navbar />
    <div className="container mx-auto">
    Hello
      </div>
    </>
  );
}
