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

    
      Bienvenue groupe 404 ! HOOO
    
      <Routes>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;

{/* ----------ROUTING -----------------------
<Route path="/login" element={<LoginPage/>} />
<Route path="/profile" element={<ProfilePage/>} />
<Route path"/profile/:id" element={<ProfileUsersPage/>}
<Route path="/notification" element={<NotificationMobilePage />}
<Route path="/map" element={<MapPage />}
*/}
