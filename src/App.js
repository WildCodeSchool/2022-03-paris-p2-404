import "./App.css";
import { Routes, Route } from "react-router-dom";
import MobileHeader from "./components/MobileHeader";
import MobileFooter from "./components/MobileFooter";
import SearchBar from "./components/SearchBar/SearchBar";
import NotifUserList from "./components/NotifUserList";
import CommentList from "./components/comments/CommentList";
import Navbar from "./components/Navbar";
import DropdownsDesktop from "./components/DropdownsDesktop";


function App() {
  
  return (
    <div className="App">
    <MobileHeader />
  
      <Routes>
        <Route path="/contact-form"/>
      </Routes>
    </div>
  );
}

export default App;
