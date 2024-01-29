import React from "react";
import './contacts.css'

const Contact = () => {
    return(
        <section className="contact" id="contact">
  <div className="contact-heading">
    <h1 className="my-heading text-center">Contact Me</h1>
  </div>
  <div className="contact-content">
    <div className="contact-form-container">
      <h1 className="greet-heading">Get In Touch</h1>
      <form className="contact-form">
        <input className="form-controls" type="text" placeholder="Your Name" />
        <input className="form-controls" type="text" placeholder="Your Email" />
        <input className="form-controls" type="text" placeholder="Your Phone" />
        <textarea
          className="form-controls"
          placeholder="Write your message"
          name="message"
          id=""
          cols={30}
          rows={10}
          defaultValue={" \n\t\t\t\t\t"}
        />
        <input
          className="form-btn btn common-btn"
          type="submit"
          defaultValue="Send Message"
        />
      </form>
    </div>
    <div className="contact-details">
      <h1 className="greet-heading">My Contact Details</h1>
      <div className="details">
        <h5 className="contact-heading">EMAIL</h5>
        <p className="contact-text">jeffr9471@gmail.com</p>
      </div>
      <div className="details">
        <h5 className="contact-heading">PHONE</h5>
        <p className="contact-text">+254794935725</p>
      </div>
      <div className="details">
        <h5 className="contact-heading">ADDRESS</h5>
        <p className="contact-text">Nairobi, Kenya</p>
      </div>
    </div>
  </div>
</section>

    );
}
export default Contact;