const ContactUs = () => {
  // bcs it is only one page
  return (
    <>
      <section>
        <div className="container com-sp pad-bot-60">
          <div>
            <div className="cor about-sp">
              <div className="ed-about-tit">
                <div className="con-title">
                  <h2>
                    Contact <span> Us</span>
                  </h2>
                  <p>......./........ </p>
                </div>
              </div>
              <div className="pg-contact d-flex justify-content-between">
                <div className="col-md-3 col-sm-6 col-xs-12 new-con new-con1">
                  <h2>LMS</h2>
                  <p>......./........ </p>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 new-con new-con1">
                  {' '}
                  <img src="img/contact/1.html" alt="" />
                  <h4>Address</h4>
                  <p>......./........ </p>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 new-con new-con3">
                  {' '}
                  <img src="img/contact/2.html" alt="" />
                  <h4>CONTACT INFO:</h4>
                  <p>......./........ </p>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 new-con new-con4">
                  {' '}
                  <img src="img/contact/3.html" alt="" />
                  <h4>Website</h4>
                  <p>......./........ </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="map">
        <div className="row contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124452.19076275238!2d79.04830162694442!3d12.89929943427151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0xbedda6917d262b5e!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1636091029159!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <div className="container">
            <div className="overlay-contact footer-part footer-part-form">
              <div className="map-head">
                <br />
                <p>Send Us Now</p>
                <h2>GetIn Touch</h2>{' '}
                <span className="footer-ser-re">Request Form</span>{' '}
              </div>
              <form id="contact_form" name="contact_form" action="">
                <ul>
                  <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                    <input
                      type="text"
                      id="f1"
                      value=""
                      name="f1"
                      placeholder="Name"
                      required=""
                    />{' '}
                  </li>
                  <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                    <input
                      type="text"
                      id="f2"
                      value=""
                      name="f2"
                      placeholder="Phone"
                      required=""
                    />{' '}
                  </li>
                  <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                    <input
                      type="text"
                      id="f3"
                      value=""
                      name="f3"
                      placeholder="City"
                      required=""
                    />{' '}
                  </li>
                  <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                    <input
                      type="text"
                      id="f4"
                      value=""
                      name="f4"
                      placeholder="Country"
                      required=""
                    />{' '}
                  </li>
                  <li className="col-md-12 col-sm-12 col-xs-12 contact-input-spac">
                    <textarea id="f5" name="f5" required=""></textarea>
                  </li>
                  <li className="col-md-6">
                    <input type="submit" value="SUBMIT" />{' '}
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
