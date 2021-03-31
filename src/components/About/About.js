import React from 'react';
import author from '../../images/author.png';

function About() {
  return (
    <div className="about">
      <img src={author} className="about__author-image" alt="author" />
      <div className="author__text-container">
        <h1 className="author__title">
          About the author
        </h1>
        <div className="author__text">
          This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.
        </div>
        <div className="author__text">
          You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.
        </div>
      </div>
    </div>
  );
}

export default About;