import "./Contact.scss";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'contact_form', form.current, 'Eke_eWLPEeWg5w8Yi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Subject</label>
      <input type="text" placeholder="ENTER MESSAGE SUBJECT"name="subject"/>
      <label>Name</label>
      <input type="text" placeholder="ENTER YOUR NAME"name="user_name" />
      <label>Email</label>
      <input type="email" placeholder="ENTER YOUR EMAIL"name="user_email" />
      <label>Message</label>
      <textarea placeholder="ENTER MESSAGE HERE"name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;