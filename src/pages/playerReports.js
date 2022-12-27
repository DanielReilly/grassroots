import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PlayerReports() {

  let navigate = useNavigate();
    
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      Reports go here
    </div>
  );
}
