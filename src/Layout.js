import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/header/Navigation';
import Footer from './components/footer/Footer';

function Layout() {
  return (
    <div className="main" id="wrapper">
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout