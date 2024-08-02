import React, { useState } from 'react'
import style from "./Layout.module.css";
import { useEffect } from 'react';
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return <>
  <Navbar />
<Outlet/>
  <Footer />
  </>
}
