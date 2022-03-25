import React from 'react'
import './Contact.css';

const Contact = () => {

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-element">
          <div className="footer-top">
            <h4>Contact</h4>
          </div>
          <div className="row">
            <div className="col-l mm">
              <div class="footer-info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="footer-location bm">
                <h4>27 Queen St, New York USA</h4>
                <h4 class="mm">+7 (212) 674-25-10</h4>
              </div>
              <p class="footer-email bm">spadyj@gmail.com</p>
            </div>
            <div className="col-r mm">
              <div class="footer-input">
                <p>Let's grab a coffee and jump on
                    conversation <span>chat with me.</span> </p>
              </div>
              <form>
                <div class="input-form mm">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your Email" />
                  <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <div class="button mm">
                  <button>Contact Me</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact