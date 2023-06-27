
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BoxTracker from "./pages/tracker";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<BoxTracker />} />
      </Routes>
    </>
  );
};

export default App;
