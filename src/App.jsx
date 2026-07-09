import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Sports from "./pages/Sports";
import Attendance from "./pages/Attendance";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/sports-enrollment" element={<Sports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
