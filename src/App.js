import "./App.css";
import DropdownsDesktop from "./components/DropdownsDesktop";
import { Routes, Route } from "react-router-dom";
import { CommentList } from "./components/comments/CommentList";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      Bienvenue groupe 404 ! HOOO
      <CommentList/>
      <DropdownsDesktop/>
      <Routes>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
