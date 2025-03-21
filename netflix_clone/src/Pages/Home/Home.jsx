import React from 'react'
import "./Home.css";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/footer';
import TitleCards from '../../Components/TitleCards/TitleCards';
import heroBanner from '../../assets/Officer_banner.webp';
import heroTitle from '../../assets//Officer_tyyle.webp';
import playIcon from '../../assets/play_icon.png';
import infoIcon from '../../assets/info_icon.png';
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={heroBanner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={heroTitle} alt="" className='caption-img' />
          <p>During a routine case for counterfeit jewelry, a demoted police officer
            unexpectedly steers his investigation toward a dangerous criminal syndicate.</p>
          <div className="hero-buttons">
            <button className='btn'><img src={playIcon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={infoIcon} alt="" />More Info</button>
          </div>
          <TitleCards />
        </div>

      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"}/>
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcomimg"} />
        <TitleCards title={"Topics for you"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
