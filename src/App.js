import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SearchBar } from "./components/SearchBar./SearchBar";

function App() {
  return (
    <div className="App">
      Bienvenue groupe 404 ! HOOO
      <SearchBar/>
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
