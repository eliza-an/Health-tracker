
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BoxTracker from "./pages/tracker";
import NavBar from "./components/button/navbar/navbar";


const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<BoxTracker />} />
      </Routes>
    </>
  );
};

export default App;
