import React from 'react';
import './App.css';
import profilePic from './B432407C-515E-43AE-8613-19A9B7A78E75_1_105_c.jpeg';


function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="profile">
        <img src={profilePic} alt="Aaryaa's face" className="profile-pic" />
        </div>
        <div className="bio">
        <h1>Aaryaa Moharir</h1>
          <h2>Computer Science Major</h2>
          <h3>About Me</h3>
          <p>
            Hello! I'm Aaryaa, a computer science major at UTD. I'm passionate about 
            cybersecurity, AI, machine learning, and web development. 
            I've worked on various projects involving Python, React, 
            backend development, and more.
          </p>
        </div>
      </header>

      <section className="projects">
      <section className="projects">
  <h2>Projects</h2>
  <ul>
    <li>
      <strong>Detect and Defend</strong> – Led a team to develop a Python-based machine learning model aimed at attacking Federated Learning models using the LeNet-5 architecture. The project focused on highlighting vulnerabilities in decentralized learning systems, achieving high accuracy in attack simulations.

    </li>
    <li>
      <strong>Conceal and Reveal</strong> – Collaborated with a team to build a machine learning model using ResNet-50 to predict whether an image contains hidden data (steganalysis). Achieved 74% accuracy, contributing to advancements in detecting hidden information in digital media.
      
    </li>
    <li>
      <strong>Arduino Controlled IoT System</strong> – Engineered a system using Arduino to remotely control LED lights via a web-based interface. This project demonstrated real-world IoT applications and provided a foundation for future smart home innovations.
    </li>
    <li>
      <strong>Simulated Cyber-Attack</strong> – Simulated a cyber-attack using Metasploit, a popular penetration testing framework, to demonstrate security vulnerabilities. This hands-on project helped educate peers on preventive security measures and the importance of safeguarding systems.
    </li>
    <li>
      <strong>Weather App</strong> – Developed an iOS app that displays real-time weather updates using the tomorrow.io API. The app provided accurate weather predictions based on the user’s location, offering a smooth and intuitive user experience.
    </li>
    <li>
      <strong>Trivia Game</strong> – Created an interactive trivia game using the Trivia API. The app allowed users to test their knowledge on various topics and provided instant feedback, incorporating gamification elements to enhance engagement.
    </li>
    <li>
      <strong>Fraud Detection Website</strong> – Built a React-based web app that allows users to enter information about insurance claims. Using machine learning, the app calculates the probability of a claim being fraudulent, streamlining the claims analysis process for insurance companies.
    </li>
  </ul>
</section>

      </section>

      <footer>
        <button className="contact-btn">Contact Me</button>
      </footer>
    </div>
  );
}

export default App;
