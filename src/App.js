import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Errorpage from "./Pages/Errorpage";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Phoneauth from "./Components/Phoneauth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [showPhoneModal, setShowPhoneModal] = useState(false)
  const [showPhoneModalCode, setShowPhoneModalCode] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('picture')) {
      return navigate("/login");
    }
  }, []);
  return (
    <div className="App">
      {showPhoneModal ? <Phoneauth setShowPhoneModal={setShowPhoneModal} showPhoneModalCode={showPhoneModalCode} setShowPhoneModalCode={setShowPhoneModalCode} showPhoneModal={showPhoneModal} /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setShowPhoneModal={setShowPhoneModal} showPhoneModal={showPhoneModal} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;