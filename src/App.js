import "./App.css";
import { Routes, Route } from "react-router-dom";
import MobileFooter from "./components/MobileFooter";
import SearchBar from "./components/SearchBar/SearchBar";
import NotifUserList from "./components/NotifUserList";
import Navbar from "./components/Navbar";
import MobileHeader from "./components/MobileHeader";
import {UserPost} from "./components/UserPost";
import Profile_Interact_Button from "./components/Profile_Interact_Button";


function App() {
  
  return (
    <div className="App">
      <div className="hidden sm:block ">
          <Navbar />
          <div className="flex flex-col m-8  justify-center content-center items-center">
          <SearchBar/>
          <UserPost />
          <div className="m-4">
          <Profile_Interact_Button />
          </div>
          </div>
      </div>

      <div className="sm:hidden flex flex-col justify-center content-center items-center">
          <MobileHeader />
          <NotifUserList />
          <div className="sticky bottom-0 w-screen">
          <MobileFooter/>
          </div>
      </div>
      
      
      <Routes>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
