import "./App.css";
import Header from "./Components/Header.tsx";
import Main from "./Components/Main.tsx";
import PostDetails from "./Components/PostDetails.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/Api-Explorer">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
