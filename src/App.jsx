import './App.css'
import { default as AnimatedRoutes } from "@/routes/index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <AnimatedRoutes />
      </Router>
    </>
  )
}

export default App

