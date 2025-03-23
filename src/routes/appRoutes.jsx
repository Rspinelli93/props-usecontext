import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from '../Calculator';
import Result from '../Result'

function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Calculator />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes