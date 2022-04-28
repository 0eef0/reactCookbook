import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './Components/Navbar';
import Heading from './Components/Heading';

// Importing pages
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Recipes from './Pages/Recipes';
import Recipe from './Pages/Recipe';
import Contact from './Pages/Contact';

const App = () => {
    const [path, setPath] = useState('Home');
    useEffect(() => {
        setPath((window.location.pathname !== '/') ? window.location.pathname.substring(1) : 'Home');
    }, []);
    return (
        <Router>
            <Navbar setPath={setPath} />
            <Heading path={path} />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipe" element={<Recipe setPath={setPath} />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default App
