import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Post from "./components/posts/post";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
