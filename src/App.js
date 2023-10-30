import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Documents from "./pages/Documents";
import Reminder from "./pages/Reminder";
import SharedLayout from "./SharedLayout";
import Prediction from "./pages/Prediction";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home />}/>
            <Route path="upload" element={<Documents />}/>
            <Route path="reminder" element={<Reminder />}/>
            <Route path="predict" element={<Prediction />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
