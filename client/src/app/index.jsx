// Основной файл
import React, { StrictMode } from 'react';  // Для импорта React
import { createRoot } from 'react-dom/client'; // Для рендеринга
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Для настройки перехода страниц

//gravity-ui
import '@gravity-ui/uikit/styles/styles.css';
import {ThemeProvider } from '@gravity-ui/uikit';
import Header from '../widgets/header/header';
import "../app/styles/style.css";
import HeadNavBar from '../widgets/head_navbar/headNavBar';
import Menu from "../pages/Menu/Menu";
import Home from '../pages/Home/Home';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme="dark">
      <Router>
      <div className="page">
        <HeadNavBar></HeadNavBar>
        <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/menu" element={<Menu />} />
        </Routes>

      </div>
      </Router>

    </ThemeProvider>
  </StrictMode>

);


