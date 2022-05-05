import "./App.css";
import { Routes, Route } from "react-router-dom";
import MobileHeader from "./components/MobileHeader";
import ProfileInfoCard from "./components/ProfileInfoCard";
import MobileFooter from "./components/MobileFooter";
import SearchBar from "./components/SearchBar/SearchBar";
import NotifUserList from "./components/NotifUserList";
import CommentList from "./components/comments/CommentList";
import Navbar from "./components/Navbar";
import DropdownsDesktop from "./components/DropdownsDesktop";
import { HomePage } from "./pages/HomePage";
import { DesktopFooter } from "./components/DesktopFooter";
import { LoginPage } from "./pages/LoginPage";
import NotificationMobilePage from "./components/pages/NotificationMobilePage";
import {Map} from "./pages/Map";


function App() {
  
  return (
    <div className="App">
      <MobileHeader />
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/login" element={< LoginPage />} />
        <Route path="/users/:id" element={< ProfileInfoCard />} />
        <Route path="/myprofile" element={""} />
        <Route path="/latest" element={< NotificationMobilePage />} />
        {/* <Route path="/map" element={<Map />} /> */}
        <Route path="/map" element={<Map />} />
       
      </Routes>
    </div>
  );
}


export default App;
