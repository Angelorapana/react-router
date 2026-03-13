import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/Chisiamo" element={<h1>Chi Siamo</h1>} />
        <Route path="/Prodotti" element={<h1>Prodotti</h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
