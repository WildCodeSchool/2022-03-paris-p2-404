import "./App.css";
import "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
