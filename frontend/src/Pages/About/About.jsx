import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";
// import MetaData from "../MetaData";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/khamkar_pradip25";
  };
  document.title = "About Us";
  return (
    <>
      <Header />

      <div className="about-section-container">
        <h1 className="Heading">
          About <span>Us</span>
        </h1>
        {/* <MetaData title={'About Us'} /> */}
        <div className="about-section-box">
          <div>
            <div>
              
              <h1>Welcome to our shop—your one-stop destination for fresh, high-quality groceries and daily essentials! Our mission is to bring the best of local and international produce right to your doorstep, ensuring that you and your family have access to nutritious, affordable, and reliable products every day.</h1>
              
              <br />
              <p>
                Thank you for choosing us as your trusted grocery store. We look forward to serving you!


              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
