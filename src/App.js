import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProfileInfoCard from "./components/ProfileInfoCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProfileInfoCard />}/>
      </Routes>
    </div>
  );
}

export default App;
