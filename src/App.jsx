import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/images/BigFishColoringLogo.png'
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import ContentArea from './components/ContentArea';
import HomePage from './Pages/HomePage.jsx';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';;
import AboutMePage from './Pages/AboutMePage..jsx';
import ShoppingCart from './Pages/ShoppingCart.jsx';
import Footer from './components/Footer.jsx';


function App() {
  

   return (
 <BrowserRouter>
    {/*Navigation */}
    <nav>
      <div className = 'max-w-full max-h-52 bg-slate-500 text-center mx-auto sticky top-0 z-50' >
                
                <Link to= "/">Home</Link> | {" "}
                <Link to = "/Pages/AboutMePage">About Me Page</Link> | {" "}
                <Link to = "/Pages/ShoppingCart">ShopingCart</Link>
            </div>
    </nav>

    {/*Routes*/}
    <Routes>
      <Route path = "/" element = {<HomePage />}/>
      <Route path = "/Pages/AboutMePage" element = {<AboutMePage/>}/>
      <Route path = "/Pages/ShopingCart" element = {<ShoppingCart/>}/>
    </Routes>


    <Footer/>
 </BrowserRouter>
 );
}

export default App
