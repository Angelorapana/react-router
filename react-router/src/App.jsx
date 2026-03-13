import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ChiSiamo from "./Pages/ChiSiamo.jsx";
import Prodotti from "./Pages/Prodotti.jsx";
import Layout from "./Components/Layout.jsx";
import InfoProdotto from "./Pages/InfoProdotto.jsx";
function App() {


  return (

    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/Prodotti" element={<Prodotti />} />
          <Route path="/prodotti/:id" element={<InfoProdotto />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
