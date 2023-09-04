import '../src/assets/css/Root.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Integer from './component/Integer';
import Studoi from './component/Studoi';
import Agile from './component/Agile';
import Team from './component/Team';
import Featured_on from './component/Featured_on';
import Long_term from './component/Long_term';
import Nav from './component/Nav';
import Agency from './component/Agency';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './component/Footer';
import Success from './component/Success';
import Preloder from './component/Preloder';
import React, { useEffect } from "react";
import Back_to_top from './component/Back_to_top';


function App() {
  useEffect(() => {
    AOS.init();

    const preloader = document.getElementById('preloader')
    setTimeout(() => {
      preloader.classList.add('d-none')
      preloader.classList.add('pointer-event-none')
      document.body.classList.remove('overflow-hidden')
    }, 2500)
    document.body.classList.add('overflow-hidden')

  }, [])
  return (
    <>
      <Preloder />
      <Nav />
      <Agency />
      <Featured_on />
      <Integer />
      <Studoi />
      <Long_term />
      <Agile />
      <Team />
      <Success />
      <Footer />
      <Back_to_top />
    </>
  );
}

export default App;
