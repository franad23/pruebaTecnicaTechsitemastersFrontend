import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//Pages
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Register from "./pages/Register/Register";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
