import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CommentList } from "./components/comments/CommentList";
import Navbar from "./components/Navbar";
import DropdownsDesktop from "./components/DropdownsDesktop";


function App() {
  return (
    <div className="App">
      <Navbar />
      Bienvenue groupe 404 ! HOOO
      <CommentList/>
      <Routes>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
