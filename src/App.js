import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchContact from "./components/organisms/search/search";
import Home from "./components/Home";
import FormAdd from "./components/organisms/add/FormAdd";
import CardEdit from "./components/molecules/cardEdit";

function App() {
  return (
      <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/add" element={<FormAdd />} />
                <Route path="/search" element={<SearchContact />} />
                <Route path="/edit/:id" element={<FormAdd />} />
                <Route path="/contato/:id" element={<CardEdit />} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;


