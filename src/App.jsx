import Navbar from "./Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Portfolio" element ={<Portfolio/>}/>
      </Routes>
    </>
  )
}

export default App