import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import BoxTracker from "./pages/tracker";

export default function App() {
  render(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Tracker" element={<BoxTracker />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
