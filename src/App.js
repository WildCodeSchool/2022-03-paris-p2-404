import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProfileInfoCard from "./components/ProfileInfoCard";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import {Map} from "./pages/Map";
import NotificationMobilePage from "./components/pages/NotificationMobilePage";
import WrongLogin from "./pages/WrongLogin";
import MyProfile from "./pages/MyProfile";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/login" element={< LoginPage />} />
        <Route path="/users/:id" element={< ProfileInfoCard />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/latest" element={< NotificationMobilePage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/wronglogin" element={<WrongLogin />} />
      </Routes>
    </div>
  );
}


export default App;
