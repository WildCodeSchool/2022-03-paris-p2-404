import "./App.css";
import { Routes, Route } from "react-router-dom";
import MobileFooter from "./components/MobileFooter";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <MobileFooter/>
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
