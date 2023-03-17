import React from "react";

import "./AboutMe.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation:wght@400;500;700&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,700&display=swap');
</style>;

const AboutMe = () => {
  return (
    <div>
      <div className="d-flex justify-content-around mt-5">
        <center>
          <img
            src="https://i.pinimg.com/236x/ca/e5/c9/cae5c931a4309a4e65cfa0aa88c0aa57.jpg"
            alt="error"
            style={{
              width: "250px",
              height: "280px",
              borderRadius: "50%",
              padding: "10px",
            }}
          />
          <h3 className="name_profile">Karaeva Cholpon</h3>
          <h5 className="text_profile">Frontend developer</h5>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              listStyle: "none",
              marginTop: "30px",
            }}
          >
            <li>
              <a href="https://github.com/venusblue1708">
                <img
                  className="imgHref"
                  width={30}
                  src="https://cdn-icons.flaticon.com/svg/6424/6424084.svg?token=exp=1678958372~hmac=21adbf2f0e793ec916dfb117c40edd46"
                  alt="error"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="imgHref"
                  width={30}
                  src="https://cdn-icons.flaticon.com/svg/6422/6422200.svg?token=exp=1678957984~hmac=ab1f0907d16b7d9b24ec1d15e31dfeca"
                  alt="error"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="imgHref"
                  width={30}
                  src="https://cdn-icons-png.flaticon.com/128/6422/6422199.png"
                  alt="error"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="imgHref"
                  width={30}
                  src="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
                  alt="error"
                />
              </a>
            </li>
          </ul>
        </center>
        <div style={{ marginTop: "70px", marginRight: "100px" }}>
          <h4 className="features__title ms-4 mb-3">Personal information</h4>
          <ul className="features__list">
            <li>Date of birth: 17.08.2004 (19 years old)</li>
            <li>Address: Bishkek, Kyrgyzstan</li>
            <li>Employment: remotely</li>
            <li>Marital status: single</li>
          </ul>
        </div>
      </div>
      <footer>
        <div className="footer_start">
          <h4>Get connected with us on social networks</h4>
        </div>
        <div className="footer_info">
          <div className="control_text">
            <h5>Company Name</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              labore?
            </p>
          </div>
          <ul className="footer__list">
            <li className="list">
              <a href="#">HTML</a>
            </li>
            <li className="list">
              <a href="#">CSS</a>
            </li>
            <li className="list">
              <a href="#">React</a>
            </li>
            <li className="list">
              <a href="#">Javascript</a>
            </li>
          </ul>
          <div>
            <h5>Usefull Links</h5>
            <a href="#">Setting</a>
          </div>
          <div>
            <h5>Contact</h5>
            <p>Moscovskaya 189, Bishkek</p>
            <a href="karaeva.cholpon08@gmail.com">
              karaeva.cholpon08@gmail.com
            </a>
            <br />
            <a href="#">0507230574</a>
          </div>
        </div>
        <div className="footer_end">
          <a className="text" href="#">
            © 2023 Copyright:
          </a>
          <a className="text" href="#">
            karaevacholpon.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;
