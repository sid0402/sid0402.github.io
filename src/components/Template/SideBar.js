import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Siddhant Agarwal</h2>
        <p>
          <a href="mailto:sagarwal437@gatech.edu">sagarwal437@gatech.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Siddhant. I am a{' '}
        third year Computer Science major at <a href="https://www.cc.gatech.edu/">Georgia Tech</a> from Mumbai, India.
        I am the creator of the {' '}
        <a href="https://x.com/S_Agarwal0402/status/1858448975013310686">IPL Simulator</a>,
        a viral cricket league simulator app with over 30,000 users.
        I am always looking to learn, and am passionate about building products.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
