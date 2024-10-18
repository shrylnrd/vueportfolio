<template>
  <div class="showcase-page">
    <h1>My Project</h1>
    <div class="projects">
      <div class="project-card">
        <img src="../assets/showcase.png" alt="Algorithm Simulator" class="project-image" />
        <h3>Algorithm Simulator</h3>
        <p>This project showcases simulations of the Banker's Algorithm and various Disk Scheduling Algorithms, enabling users to identify and understand how these essential algorithms function in practical scenarios</p>
        <a href="https://github.com/shrylnrd/operatingsystem" target="_blank" class="project-link">View on GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Only the Algorithm Simulator project is displayed
    };
  }
};
</script>

<style scoped>
.showcase-page {
  padding: 20px;
  background-color: #000; 
  color: #fff; 
}

h1 {
  color: #b22222; 
  text-align: center;
  margin-bottom: 20px;
}

p {
  text-align: center;
  margin-bottom: 40px;
}

.projects {
  display: flex;
  justify-content: center;
}

.project-card {
  background-color: #000000; 
  border: 1px solid #ff4d4d; 
  border-radius: 10px;
  padding: 20px;
  width: 1000px; 
  text-align: center;
  box-shadow: 0 4px 8px rgba(255, 77, 77, 0.2); 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.project-card:hover {
  transform: scale(1.1); 
  box-shadow: 0 8px 16px #8b0000; 
}

.project-card img {
  width: 100%; 
  height: 300px;
  object-fit: cover;
  border-bottom: 1px solid #8b0000; 
  margin-bottom: 15px;
}

.project-card h3 {
  color: #b22222; 
  margin-bottom: 10px;
}

.project-card p {
  text-align: center;
  color: #ccc; 
}

.project-card a {
  display: inline-block;
  margin-top: 20px;
  background-color: #8b0000;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.project-card a:hover {
  background-color: #8b0000; 
}
</style>
