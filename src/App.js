import "./App.css";
import DropdownsDesktop from "./components/DropdownsDesktop";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import NotifUserList from "./components/NotifUserList";
import CommentList from "./components/comments/CommentList";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <div className="App">
      <NotifUserList />
      <Navbar />
      Bienvenue groupe 404 ! HOOO
      <SearchBar/>
      <CommentList/>
      <DropdownsDesktop/>
      <Routes>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
