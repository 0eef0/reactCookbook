import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/test1" element={<h1>Page 2</h1>} />
                <Route path="/test2" element={<h1>Page 3</h1>} />
                <Route path="/test3" element={<h1>Page 4</h1>} />
            </Routes>
        </Router>
    )
}

export default App
