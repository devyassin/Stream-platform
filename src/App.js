import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer, Container } from "./Components/index";
import { Home, Profile } from "./Pages/index";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Profile" element={<Profile/>}/>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
