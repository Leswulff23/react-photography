import React from 'react';
import './Latest.css';
import { Pic5, Pic6, Pic7 } from '../../assets/images';

const Latest = () => {

  let path = "#";
  return (
    <section className="latest-section">
      <div className="latest-wrapper">
        <div className="latest-element">
          <div class="latest-header">
            <h4>WHAT'S NEW</h4>
          </div>
          <div class="latest-title">
            <h4>Latest Works</h4>
          </div>
          <div className="latest-grid mm">
            <div>
              <div className="latest-img">
                <img src={Pic5} alt="" />
              </div>
            </div>
            <div>
              <div className="latest-img">
                <img src={Pic6} alt="" />
              </div>
            </div>
            <div>
              <div className="latest-img">
                <img src={Pic7} alt="" />
              </div>
            </div>
          </div>
          <div className="lt-works mm">
            <h4>NEED A PHOTOGRAPHER?</h4>
            <div className="lt-col">
              <a href={path}><h4>Let's Collaborate</h4></a>
            </div>
          </div> 
        </div>     
      </div>
    </section>
  )
}

export default Latest