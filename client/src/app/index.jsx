// Основной файл
import React, { StrictMode, useEffect, useState } from 'react';  // Для импорта React
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
import { Admin } from '../pages/Admin/Admin';
import { useAuth } from '../features/auth/model/useAuth';
import { Registration } from '../pages/Registration/Registration';
import { Login } from '../pages/Login/Login';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function App() {
  const {role} = useAuth();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=> {
    setTimeout(() => {
      setIsLoaded(true);
    }, 0);
  }, [])

  if (!isLoaded) {
    return <><div className="">Загрузка...</div></>
  }
    return (
      <StrictMode>
      <ThemeProvider theme="dark">
        <Router>
        <div className="page">
          <HeadNavBar></HeadNavBar>
          <Routes>
          <Route path="/" element={role === "admin" ? <Admin/> : <Home/>} />;
          <Route path="/tariffs" element={<Tariffs />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/account" element={<Account />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/pc" element={<Admin />} />
          </Routes>
        </div>
        </Router>
        <Footer></Footer>
      </ThemeProvider>
    </StrictMode>
  )
}

root.render(<App/>)


