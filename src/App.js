import "./App.css";
import { Routes, Route } from "react-router-dom";
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
     <MobileFooter/>
      <NotifUserList />
      <Navbar />
      Bienvenue groupe 404 ! HOOO
      <SearchBar/>
      <CommentList/>
      <Routes>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
