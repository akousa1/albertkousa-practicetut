// components/Contact.js
import React from "react";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>78 Orchardleigh Street, Yennora, Sydney, NSW 2161, Australia</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>
            <a href="mailto:albertkousa@hotmail.com">albertkousa@hotmail.com</a>
          </p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <p>
            <a href="tel:0432091746">0432 091 746</a>
          </p>
        </div>
      </div>
      <div className="references">
        <h2 className="section-title">References</h2>
        <p>Stacy Evans, Project Manager Infosys Limited 0400 191 554</p>
        <p>Mena Boles, Challenger Funds Management 0431 040 968 </p>
        <p>
          Ana Hol, Professor (Information Systems) Western Sydney University
          0477701065
        </p>
      </div>
    </section>
  );
}

export default Contact;
