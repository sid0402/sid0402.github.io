import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Siddhant Agarwal via email @ sagarwal437@gatech.edu"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>
          Feel free to get in touch.
        </p>
        <p>
          I am currently looking to further develop the Indian Premier League Simulator,
          so reach out to me if you are as passionate about cricket and
          developing products as I am!
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
