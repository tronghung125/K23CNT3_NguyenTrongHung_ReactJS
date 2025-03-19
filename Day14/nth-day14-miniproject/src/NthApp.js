import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import NthNavBar from "./components/NthNavBar";
import NthHome from "./components/NthHome";
import NthListUsers from "./components/NthListUsers";
import NthCreateUser from "./components/NthCreateUser";
import NthEditUser from "./components/NthEditUser";

const API_URL = "https://67d922b700348dd3e2a9b682.mockapi.io/k23cnt3_nguyentronghung/nth_users"; // Cập nhật đường dẫn API

function NthApp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Lỗi khi lấy danh sách người dùng:", error));
  }, []);



  return (
    <Router>
      <NthNavBar />
      <Routes>
        <Route path="/" element={<NthHome />} />
        <Route path="/users" element={<NthListUsers users={users} />} />
        <Route path="/create" element={<NthCreateUser />} />
        <Route path="/edit/:id" element={<NthEditUser />} />
      </Routes>
    </Router>
  );
}

export default NthApp;
