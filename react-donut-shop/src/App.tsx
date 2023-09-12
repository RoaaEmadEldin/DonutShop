import { Route, Routes } from "react-router-dom";
import Links from "./Links";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Links />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
