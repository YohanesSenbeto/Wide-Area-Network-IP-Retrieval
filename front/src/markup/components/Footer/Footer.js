import React from 'react';


function Footer(props) {
  return (
    <footer className="main-footer">
      <div className="upper-box">
        <div className="auto-container">
          <div className="row no-gutters">
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content">
                  <div className="icon">
                    <span className="flaticon-pin"></span>
                  </div>
                  <div className="text">Ethiopia<br /> Addis Ababa</div>
                </div>
              </div>
            </div>
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content">
                  <div className="icon">
                    <span className="flaticon-email"></span>
                  </div>
                  <div className="text">Email us : <br /> <a
                    href="mailto:elianatech@gmail.com">elianatech@gmail.com</a></div>
                </div>
              </div>
            </div>
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content">
                  <div className="icon">
                    <span className="flaticon-phone"></span>
                  </div>
                  <div className="text">Call us on : <br /><strong>+ 251 917035669</strong></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="widgets-section">
        <div className="auto-container">
          <div className="widgets-inner-container">
            <div className="row clearfix">
              <div className="footer-column col-lg-4">
                <div className="widget widget_about">
                  <div className="text">The Ethio-WAN-IP retrieve  Website for Ethiopia will primarily focus on providing WAN IP address information specific to the country. It will cover subnetting, default gateway details, geolocation data, ISP identification, and troubleshooting guides related to WAN IP networking within the Ethiopian context.
                  </div>
                </div>
              </div>
              <div className="footer-column col-lg-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="widget widget_links">
                      <h4 className="widget_title">Usefull Links</h4>
                      <div className="widget-content">
                        <ul className="list">
                          <li><a href="index.html">Home</a></li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="#">Appointment</a></li>
                          <li><a href="testimonial.html">Testimonials</a></li>
                          <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="widget widget_links">
                      <h4 className="widget_title">Our Services</h4>
                      <div className="widget-content">
                        <ul className="list">
                          <li><a href="#">Website Development for small and Large Business Company</a></li>
                          <li><a href="#">Computer Maintenance</a></li>
                          <li><a href="#">Mobile Repair</a></li>
                          <li><a href="#">Studying Programming Languanges</a></li>
                          <li><a href="#">Network Cable Installation for Building</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-column col-lg-4">
                <div className="widget widget_newsletter">
                  <h4 className="widget_title">Newsletter</h4>
                  <div className="text">Get latest updates and offers.</div>
                  <div className="newsletter-form">
                  </div>
                  <ul className="social-links">
                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                    <li><a href="https://www.linkedin.com/in/yohanes-kankure-61833218a/"><span className="fab fa-linkedin-in"></span></a></li>
                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                    <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="footer-bottom">
          <div className="copyright-text">© Copyright <a href="#">Abe Garage</a> 2023 . All right reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
