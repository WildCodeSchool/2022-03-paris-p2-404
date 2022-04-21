import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CommentList } from "./components/comments/CommentList";


function App() {
  return (
    <div className="App">
      Bienvenue groupe 404 ! HOOO
      <CommentList/>
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
