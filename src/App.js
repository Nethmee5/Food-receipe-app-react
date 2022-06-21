import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/components/pages/Homepage";
import Get from "../src/components/http/Get";
import Post from "../src/components/http/Post";
import Crud from "./components/crud/Crud";
import Form from "./components/crud/Form";
import Duplicates from "./components/Duplicates";
function App() {
  const Navbar = () => {
  return (
    <>
      <Link to="/Homepage">
        {""}
        Homepage
      </Link>
      <Link to="/Get">
        {""}
       Get
      </Link>
      <Link to="/Post">
        {""}
     Post
      </Link>
      <Link to="/Crud">
        {""}
    Crud
      </Link>
      <Link to="/Duplicates">
        {""}
        Duplicates find in an array
      </Link>
    </>
  );
};
return(
  <Router>
    <Navbar/>
    <Routes>
      <Route path ="/Homepage" element={<Homepage/>}/>
      <Route path ="/Get" element={<Get/>}/>
      <Route path ="/Post" element={<Post/>}/>
      <Route path ="/Crud" element={<Crud/>}/>
      <Route path ="/Form" element={<Form/>}/>
      <Route path ="/Duplicates" element={<Duplicates/>}/>

    </Routes>
  </Router>
)
}

export default App;
