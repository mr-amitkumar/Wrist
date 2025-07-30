import Home from "./HomePage/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes> 
      <Footer />
    </Router>
    </div>
  )
}

export default App;
