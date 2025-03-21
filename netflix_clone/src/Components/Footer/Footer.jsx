import React from 'react'
import youtubeIcon from "../../assets/youtube_icon.png";
import facebookIcon from "../../assets/facebook_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";

import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtubeIcon} alt="" />
        <img src={facebookIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
      </div>
      <ul>
        <li>Only on Netflix</li>
        <li>Help center</li>
        <li>Legal Notices</li>
        <li>FAQ</li>
        <li> Account</li>
        <li> Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Ways to Watch</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        <li>Speed Test</li>
      </ul>
      <p className='copyright-text'>Netflix India</p>

    </div>
  )
}

export default Footer
