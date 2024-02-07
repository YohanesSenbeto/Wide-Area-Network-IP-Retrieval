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
                  <div className="text">Ethiopia, Addis Ababa, <br /> Saris, Adey Abeba</div>
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
                    href="mailto:contact.contact@elianatech.com">elianatech@gmail.com</a></div>
                </div>
              </div>
            </div>
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content">
                  <div className="icon">
                    <span className="flaticon-phone"></span>
                  </div>
                  <div className="text">Call us on : <br /><strong>+ 2519 17035669 </strong></div>
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
                  <div className="text">Welcome to WAN IP Lookup, your go-to destination for retrieving accurate and dependable WAN IP addresses. 
                  Designed specifically for network users in Ethiopia, our platform offers a simple yet powerful tool to effortlessly obtain your WAN IP address. 
                  Whether you're a business owner, a student, or a tech enthusiast, our service ensures reliable access to the information you need to manage your network effectively.
                   Say goodbye to uncertainty and hello to seamless connectivity with WAN IP Lookup.
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
                          <li><a href="#">WI-FI Router Configuration</a></li>
                          <li><a href="#">Network Cable Installation</a></li>
                          <li><a href="#">Website Development</a></li>
                          <li><a href="#">Computer Maintenance</a></li>
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
                    <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
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
          <div className="copyright-text">© Copyright <a href="#">WAN IP</a> 2024 . All right reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;