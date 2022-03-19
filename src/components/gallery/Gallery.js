import React from 'react';
import './Gallery.css';
import { Pic1, Pic2, Pic3, Pic4 } from '../../assets/images';

const Gallery = () => {

      let path = "#";

  return (
    <section className="gallery-section">
      <div className="gallery-wrapper">
        <div className="gallery-element">
          <div className="gallery-title"> 
            <h4>GALLERY</h4>
            <div className="sm gallery-header">
              <h4>“Photography is a <span>love</span> affair with life". - Burk Uzzle</h4>
            </div>
          </div>
          <div className="gallery-grid mm">
            <div>
              <div className="gallery-img">
                <img src={Pic1} alt="" />
                <div className="grid-desc">
                  <h4>2016 - 2017</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
            <div>
              <div className="gallery-img">
                <img src={Pic2} alt="" />
                <div className="grid-desc">
                  <h4>2016 - 2017</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
            <div>
              <div className="gallery-img">
                <img src={Pic3} alt="" />
                <div className="grid-desc">
                  <h4>2016 - 2017</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
            <div>
              <div className="gallery-img">
                <img src={Pic4} alt="" />
                <div className="grid-desc">
                  <h4>2016 - 2017</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mm gallery-link">
          <a href={path}><h4>More Gallery</h4></a>
        </div>
      </div>
    </section>
  )
}

export default Gallery