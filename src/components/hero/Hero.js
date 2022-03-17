import React from 'react';
import './Hero.css';
import Video from '../../assets/videos/video.mp4';
import { FaTwitter, FaPinterestP } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';


const Hero = () => {
  return (
    <section class="hero">
      <div className="hero-bg">
        <video autoPlay loop muted src={Video} type="video/mp4">
        </video>
        <div className="container wrapper">
          <div className="pd">
            <div className="mm hero-header">
            <h4>JAMES <span>SPADER</span></h4>
            </div>
            <div className="sm hero-title">
                <h4>Photographer</h4>
            </div>
            <div className="mm hero-desc">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Recusandae quisquam neque, aut iusto natus ex quod minus similique? 
                  Dignissimos possimus, eligendi eos itaque fuga corrupti officia consequuntur quasi? 
                  Recusandae, dolorum?
              </p>
            </div>
          </div>
          <div className="bm social-wrapper">
            <div className="social-line"></div>
              <ul className="socials">
                <br></br>
                <li><i><FaTwitter size={22}/></i></li>
                <br></br>
                <li><i><AiFillInstagram size={22}/></i></li>
                <br></br>
                <li><i><FaPinterestP size={22}/></i></li>
                <br></br>
              </ul>    
            <div className="social-line"></div>    
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero