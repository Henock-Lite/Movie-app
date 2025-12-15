import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Userlist from "./pages/Userlist";
import "./style/index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
