// Основной файл
import React, { StrictMode } from 'react';  // Для импорта React
import { createRoot } from 'react-dom/client'; // Для рендеринга
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Для настройки перехода страниц

//gravity-ui
import '@gravity-ui/uikit/styles/styles.css';
import {ThemeProvider } from '@gravity-ui/uikit';
import Header from '../shared/header/header';
import "../app/styles/style.css";
import HeadNavBar from '../shared/head_navbar/headNavBar';
import Menu from "../pages/Menu/Menu";
import Home from '../pages/Home/Home';
import Tariffs from "../pages/Tariffs/Tariffs"
import Reservation from "../pages/Reservation/Reservation"
import Reviews from "../pages/Reviews/Reviews"
import Contacts from "../pages/Contacts/Contacts"
import Account from "../pages/Account/Account"
import { Footer } from '../shared/Footer/Footer';

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
        <Route path="/tariffs" element={<Tariffs />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      </Router>

      <Footer></Footer>
    </ThemeProvider>
  </StrictMode>

);


