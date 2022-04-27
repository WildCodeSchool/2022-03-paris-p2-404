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
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/login" element={< LoginPage />} />
        <Route path="/users/:id" element={< ProfileInfoCard />} />
        <Route path="/myprofile" element={""} />
        <Route path="/latest" element={< NotifUserList />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
