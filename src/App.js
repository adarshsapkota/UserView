import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Users from "./Components/Users";
import UserList from "./Components/UserList";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/UserList/:id" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
