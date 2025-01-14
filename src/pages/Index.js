import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Siddhant Agarwal's personal website. Third year Computer Science major at the Georgia Institute of Technology."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            Student. Developer. Sports Analyst.
          </h2>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
