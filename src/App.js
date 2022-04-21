import "./App.css";
import DropdownsDesktop from "./components/DropdownsDesktop";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      Bienvenue groupe 404 ! HOOO
      <DropdownsDesktop/>
      <Routes>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
