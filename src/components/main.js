import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Contact from './contact';
import Work from './work';
import Other from './other';

const Main = () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/other" element={<Other/>} />
    </Routes>
)

export default Main;