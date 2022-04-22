import "./App.css";
import { Routes, Route } from "react-router-dom";
import MobileFooter from "./components/MobileFooter";
import SearchBar from "./components/SearchBar/SearchBar";
import NotifUserList from "./components/NotifUserList";
import Navbar from "./components/Navbar";
import MobileHeader from "./components/MobileHeader";
import {UserPost} from "./components/UserPost";
import Profile_Interact_Button from "./components/Profile_Interact_Button";
import { CoverPictures } from "./components/coverPictures/CoverPictures";


function App() {
  
  return (
    <div className="App">
      <h2>Mobile Header</h2>
    <MobileHeader />
    <h2>Notifications</h2>
    <NotifUserList />

     <MobileFooter/>
      
      <Navbar />
      <SearchBar/>
      <UserPost />
      <CoverPictures />
      <Profile_Interact_Button />
     
      <Routes>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
