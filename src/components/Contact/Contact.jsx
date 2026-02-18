import React, { useState } from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import "./Contact.css";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "19932b95-7413-4ff3-b83d-c44cfd6a37b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <div>
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in Touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>
              I’m open to new projects and collaborations. Feel free to reach
              out anytime to discuss your ideas or requirements.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" />
                <p>nextgensols@hello</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" />
                <p>Mardan, KPK Pakistan</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>nextgensols@hello</p>
              </div>
            </div>
          </div>

          <form action="" onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" placeholder="Enter your Email" />
            <label htmlFor="">Your Message</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message here"
            />
            <button type="submit" className="contact-submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default Contact;
