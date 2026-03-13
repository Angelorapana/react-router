import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ChiSiamo from "./Pages/ChiSiamo.jsx";
import Prodotti from "./Pages/Prodotti.jsx";
import NavBar from "./Components/NavBar.jsx";

function App() {


  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChiSiamo" element={<ChiSiamo />} />
        <Route path="/Prodotti" element={<Prodotti />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
