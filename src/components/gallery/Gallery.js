import React from 'react';
import './Gallery.css';
import { Pic1, Pic2, Pic3, Pic4 } from '../../assets/images';

const Gallery = () => {

      let path = "#";

  return (
    <section className="pd gallery-section">
      <div className=" container gallery-wrapper">
        <div className="gallery-title">
          <h4>GALLERY</h4>
        </div>
        <div className="mm gallery-header">
            <h4>“Photography is a <span>love</span> affair with life". - Burk Uzzle</h4>
        </div>
      </div>

      <div className="container gallery-grid">
            <div className="gal-grid-container">
              <div className="grid-card">
                <h4>2016 - 2017</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>                
                <div className="gal-grid-img">
                  <img src={Pic1} alt=""/>
                </div>   
              </div>
              <div className="grid-card">
                <h4>2016 - 2017</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>                
                <div className="gal-grid-img">
                  <img src={Pic2} alt=""/>
                </div>   
              </div>
              <div className="grid-card">
                <h4>2016 - 2017</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>                
                <div className="gal-grid-img">
                  <img src={Pic3} alt=""/>
                </div>   
              </div>
              <div className="grid-card">
                <h4>2016 - 2017</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>                
                <div className="gal-grid-img">
                  <img src={Pic4} alt=""/>
                </div>   
              </div>      
            </div>
            <div class="mm gal-link">
                <a href={path}><h4>More Gallery</h4></a>
            </div>
        </div>
    </section>
  )
}

export default Gallery