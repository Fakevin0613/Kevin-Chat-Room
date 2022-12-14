import React from "react";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Personal from "./pages/Personal";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/setpersonal" element={<Personal />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
