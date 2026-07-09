import React from 'react'
import { useState } from 'react';
import Service from './Service';
import client from './Client';

const About = () => {

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        I am a dedicated PHP Developer with over 2+ years of experience in building dynamic and scalable web applications. I have hands-on experience with frameworks like Laravel and CodeIgniter, along with strong expertise in WordPress development including theme customization and plugin integration.

        I also possess working knowledge of front-end technologies such as HTML, CSS, JavaScript, and basic React. I am comfortable working with MySQL databases, REST APIs, and version control tools like Git.

        I am passionate about learning new technologies, writing clean and efficient code, and delivering high-quality solutions that meet business requirements.
      </section>
      <Service />

    </article>)
}

export default About