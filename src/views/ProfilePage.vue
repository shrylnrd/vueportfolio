<template>
    <div class="profile-page">
      <div class="intro">
        <div class="intro-left">
          <h1>Hello, I am <span class="name-glow"> Sherylen Red</span></h1>
          <p class="description">
            a Computer Engineering student with a passion for learning new skills and enhancing my programming expertise. 
          </p>
        </div>
        <div class="profile-picture">
          <img src="../assets/red.png" alt="Profile Picture" />
        </div>
      </div>
  
      <!-- About Me Card -->
      <div class="about-me-card">
        <div class="about-me-left">
          <h2>About Me</h2>
        </div>
        <div class="about-me-right">
          <ul>
            <li><i class="bi bi-person"></i> <strong>Age: </strong>  22 years old </li>
            <li><i class="bi bi-gender-female"></i> <strong>Gender: </strong>  Female</li>
            <li><i class="bi bi-calendar"></i> <strong>Birthday: </strong>  September 04, 2002</li>
            <li><i class="bi bi-journal"></i> <strong>Religion: </strong> Roman Catholic</li>
            <li><i class="bi bi-house"></i> <strong>Address: </strong>  Quezon City</li>
            <li><i class="bi bi-building"></i> <strong>School: </strong>  Technological Institute of the Philippines - Manila</li>
            <li><i class="bi bi-journal-bookmark"></i> <strong>Year & Course: </strong>  4th year, BS Computer Engineering</li>

          </ul>
        </div>
      </div>
  
      <!-- Skills Section -->
      <div class="skills-card">
        <div class="skills-left">
          <h2>Skills</h2>
        </div>
        <div class="skills-right">
          <ul>
            <li><i class="bi bi-code-slash"></i> HTML, CSS, JavaScript</li>
            <li><i class="bi bi-laptop"></i> C++, Python</li>
            <li><i class="bi bi-shield-lock"></i> Cybersecurity</li>
          </ul>
        </div>
      </div>
  
      <!-- Social Media Section -->
      <div class="social-media-card">
        <div class="social-media-left">
          <h2>Social Media</h2>
        </div>
        <div class="social-media-right">
          <ul>
            <li><i class="bi bi-github"></i> <a href="https://github.com/shrylnrd" target="_blank">GitHub</a></li>
            <li><i class="bi bi-google"></i> <a href="https://shrylnrd@gmail.com" target="_blank">Google</a></li>
            <li><i class="bi bi-facebook"></i> <a href="https://www.facebook.com/sherylen.red/" target="_blank">Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Main container for the page */
  .profile-page {
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
  }
  
  /* Introduction Section */
  .intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    width: 100%;
    max-width: 1200px;
  }
  
  .intro-left {
    max-width: 60%;
    text-align: left;
    padding: 0;
  }
  
  h1 {
    margin: 0;
    font-size: 100px;
    color: #fff;
  }
  
  .name-glow {
    color: #b22222;
  }
  
  .description {
    margin-top: 20px;
    font-size: 17px;
  }
  
  /*  profile picture */
  .profile-picture {
    text-align: center;
  }
  
  .profile-picture img {
    border-radius: 50%;
    width: 350px;
    height: 350px;
    border: 5px solid #b22222;
    box-shadow: 0 0 15px #8b0000;
  }
  
  /* About Me Section and Skills Section */
  .about-me-card,
  .skills-card,
  .social-media-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 0 20px #8b0000;
    margin-bottom: 30px;
    width: 100%;
    max-width: 1200px;
  }
  
  .about-me-left,
  .skills-left,
  .social-media-left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
  
  .about-me-left h2,
  .skills-left h2,
  .social-media-left h2 {
    font-size: 50px;
    color: #ffffff;
  }
  
  .about-me-right,
  .skills-right,
  .social-media-right {
    flex: 2;
  }
  
  .about-me-right ul,
  .skills-right ul,
  .social-media-right ul {
    list-style: none;
    padding: 0;
    margin-left: 0; 
  }
  
  .about-me-right li,
  .skills-right li,
  .social-media-right li {
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  .about-me-right li i,
  .skills-right li i,
  .social-media-right li i {
    margin-right: 10px;
    color: #b22222;
  }
  
  .social-media-right a {
    color: #fff;
    text-decoration: none;
  }
  
  .social-media-right a:hover {
    text-decoration: underline;
  }
  </style>
  