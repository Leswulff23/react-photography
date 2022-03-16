import React from 'react';
import './Latest.css';
import { Pic5, Pic6, Pic7 } from '../../assets/images';

const Latest = () => {
  return (
    <section className="latest-section">
      <div className="container latest-wrapper">
        <div class="latest-title">
            <h4>WHAT'S NEW</h4>
        </div>
        <div class="latest-header">
            <h4>Latest Works</h4>
        </div>
      </div>

      <div className="container latest-grid">
        <div className="latest-grid-container">
          <div class="grid-card">
            <div class="latest-grid-img">
                <img src={Pic5} alt=""/>
            </div>
          </div>
          <div class="grid-card">
              <div class="latest-grid-img">
                  <img src={Pic6} alt=""/>
              </div>
          </div>
          <div class="grid-card">
              <div class="latest-grid-img">
                  <img src={Pic7} alt=""/>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Latest