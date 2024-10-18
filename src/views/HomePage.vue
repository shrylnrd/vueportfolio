<template>
  <div class="home-container">
    <!-- Main Content -->
    <div class="home-content">
      <div class="home-header">
        <h1>Welcome to Red's Portfolio</h1>
        <p>Hi there! I’m thrilled to share my portfolio with you. Explore the projects and experiences that reflect my journey. </p>
      </div>

      <!-- Features Section with Cards -->
      <div class="features-section">
        <div class="feature-card" @click="$router.push({ name: 'Profile' })">
          <i class="bi bi-person"></i>
          <h3>Profile</h3>
          <p>Get to know me,
            view my personal details, skills, and social media links.</p>
        </div>
        <div class="feature-card" @click="$router.push({ name: 'Showcase' })">
          <i class="bi bi-display"></i>
          <h3>Showcase</h3>
          <p>See my work,
            explore a collection of my projects that showcase my skills and creativity.</p>
        </div>
        <div class="feature-card" @click="$router.push({ name: 'Contact' })">
          <i class="bi bi-envelope"></i>
          <h3>Contact</h3>
          <p>Let’s connect, fill out the form to reach out with your inquiry.</p>
        </div>
        <div class="feature-card" @click="$router.push({ name: 'Creative' })">
          <i class="bi bi-brush"></i>
          <h3>Creative</h3>
          <p>My creative space, view the things that I love.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    username: {
      type: String,
      required: true
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("authToken");
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scoped>

/* Main container */
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Main content styling */
.home-content {
  flex: 1;
  padding: 40px;
  text-align: center;
}

.home-header h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #b22222;
}

.home-header p {
  font-size: 1.2rem;
  color: #e9e9e9;
}

.features-section {
  display: flex;
  flex-direction: row; /* Display cards in a row */
  justify-content: space-between; /* Space between cards */
  gap: 10px; 
  margin-top: 40px;
  padding: 0 20px; 
}

.feature-card {
  background-color: #f4f4f4;
  padding: 40px; 
  border-radius: 10px;
  text-align: center; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  width: 100%;
  height: 500px;


  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
}

.feature-card:hover {
  transform: scale(1.02);
  background-color: #eee;
}

.feature-card i {
  font-size: 3.5rem; 
  margin-bottom: 15px;
  color: #8b0000;
}

.feature-card h3 {
  font-size: 1.8rem; 
  margin-bottom: 10px;
  color: #333;
}

.feature-card p {
  font-size: 1.5rem; 
  color: #666;
  margin-top: 10px;
}

/* Footer */
.footer {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 15px 0;
}

/* Button and link styling */
button.btn-dark-red {
  background-color: #8b0000;
  color: white;
  border: none;
}

button.btn-dark-red:hover {
  background-color: #b22222;
}

.nav-link {
  color: white;
  padding: 10px 15px;
  margin-right: 15px;
  display: flex;
  align-items: center;
}

.nav-link i {
  margin-right: 8px;
}

.nav-link:hover, .active-link {
  background-color: #8b0000;
}
</style>
