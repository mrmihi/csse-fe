import './App.css'
import { default as AnimatedRoutes } from "@/routes/index.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from './components/ui/sidebar';

function App() {

  return (
    <>
    <Router>
      <AnimatedRoutes />
      <Sidebar/>
      </Router>
    </>
  )
}

export default App

