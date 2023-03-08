import "./Contact.scss";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i537mvl",
        "contact_form",
        form.current,
        "Eke_eWLPEeWg5w8Yi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main className="contact__section">
      <h2>Contact Damon by email</h2>
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <div className="contact__subject--wrapper">
          <label className="contact__subject">Subject</label>
          <input
            className="contact__subject-field"
            type="text"
            placeholder="ENTER MESSAGE SUBJECT"
            name="from_subject"
          />
        </div>
        <div className="contact__name--wrapper">
          <label className="contact__name">Name</label>
          <input
            className="contact__name-field"
            type="text"
            placeholder="ENTER YOUR NAME"
            name="from_name"
          />
        </div>
        <div className="contact__email--wrapper">
          <label className="contact__email">Email</label>
          <input
            className="contact__email-field"
            type="email"
            placeholder="ENTER YOUR EMAIL"
            name="from_email"
          />
        </div>
        <div className="contact__message--wrapper">
          <label className="contact__message">Message</label>
          <textarea
            className="contact__message-field"
            placeholder="ENTER MESSAGE HERE"
            name="message"
          />
        </div>

        <input className="contact__button" type="submit" value="Send" />
      </form>
    </main>
  );
}

export default Contact;
