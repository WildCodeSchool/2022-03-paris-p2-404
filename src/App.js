import "./App.css";
import { Routes, Route } from "react-router-dom";
import MobileFooter from "./components/MobileFooter";
import MobileHeader from "./components/MobileHeader";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <MobileHeader />
      <MobileFooter/>
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
