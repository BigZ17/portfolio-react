
import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <h3>Front-end</h3>
        <ul className="skills">
          <li>CSS</li>
          <li>HTML</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>Responsive Design</li>
        </ul>
        <h3>Back-end</h3>
        <ul className="skills">
          <li>NoSQL, MongoDB, Mongoose</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>Node</li>
        </ul>
      </div>
      <p>Download Resume <a href="https://www.linkedin.com/in/zachary-craven-82377a1a8/">here!</a></p>
    </section>
  );
}

export default Resume;