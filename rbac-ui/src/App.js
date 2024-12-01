import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/users">Users</Link>
        {" | "}
        <Link to="/roles">Roles</Link>
      </nav>
      <Routes>
        <Route path="/users" element={<UserManagement />} />
        <Route path="/roles" element={<RoleManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
