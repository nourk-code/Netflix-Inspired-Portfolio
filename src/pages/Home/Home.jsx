import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>My Journey To Discovering AI</p>
          <div className="hero-btns">
            <button className='btn dark-btn'><img src={info_icon} alt="" />Ask A ChatBot</button>
          </div>
          <TitleCards title="Popular on Portfolio" />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="About Me" />
        <TitleCards title="Projects" />
        <TitleCards title="Leadership Experience" />
        <TitleCards title="Extracurricular" />
      </div>
    </div>
  );
};

export default Home;
