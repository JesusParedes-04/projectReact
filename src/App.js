import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./Components/Error404";
import Footer from "./Components/Footer";
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Experienciacofi from "./Components/Experienciacofi";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/experiencia"} element={<Experienciacofi mensaje= {'Sumate a la experiencia Cofi'} />} />
        <Route path={"/category"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
