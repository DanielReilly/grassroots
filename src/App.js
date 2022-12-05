import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/common/loginRegister";
import Home from "./pages/home";
import FindGame from "./pages/findGame";
import FindPlayer from "./pages/findPlayer";
import Debrief from "./pages/debrief";
import PlayerReports from "./pages/playerReports";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/wrong-password") {
            toast.error("Please check your Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check your Email");
          }
        });
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
        });
    }
  };

  return (
    <div className="App">
      <>
        <ToastContainer />
        <Routes>
          <Route
            path="/login"
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
                switcherHandlerText="Don't have an account?"
                switcherHandlerCTA="Register Now"
                switcherHandlerLink={"/register"}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                title="Create Account"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
                switcherHandlerText="Already have an account?"
                switcherHandlerCTA="Login"
                switcherHandlerLink="/login"
              />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<FindGame />} />
          <Route path="/players" element={<FindPlayer />} />
          <Route path="/debrief" element={<Debrief />} />
          <Route path="/reports" element={<PlayerReports />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
