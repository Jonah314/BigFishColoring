import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/images/BigFishColoringLogo.png'
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import ContentArea from './components/ContentArea';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <Banner />
      <ContentArea/>
    </>
  )
}

export default App
