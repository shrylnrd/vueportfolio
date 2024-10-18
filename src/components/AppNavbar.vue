<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
    <router-link class="navbar-brand text-white" :to="{ name: 'Home' }" exact-active-class="active-link">
      <i class="bi bi-house-door"></i> Home
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar Content -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Profile' }" exact-active-class="active-link">
            <i class="bi bi-person"></i> Profile
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Showcase' }" exact-active-class="active-link">
            <i class="bi bi-display"></i> Showcase
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Contact' }" exact-active-class="active-link">
            <i class="bi bi-envelope"></i> Contact
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Creative' }" exact-active-class="active-link">
            <i class="bi bi-brush"></i> Creative
          </router-link>
        </li>
      </ul>

      <!-- Logout Button -->
      <button class="btn btn-dark-red" @click="logout">
        <i class="bi bi-box-arrow-right me-1"></i> Logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  props: {
    username: {
      type: String,
      required: true
    }
  },
  methods: {
    logout() {
      // Clear session (example)
      localStorage.removeItem('authToken');
      // Redirect to login page
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style scoped>
/* Full-width sticky navbar */
.custom-navbar {
  background-color: #000000;
  padding-left: 30px; 
  padding-right: 20px;
  height: 60px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100vw;
  margin: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-size: 1.2rem;
  margin-right: 30px;
  display: flex;
  align-items: center;
}

/* Navbar links */
.nav-link {
  color: white;
  padding: 10px 20px;
  margin-right: 15px; 
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

.nav-link i {
  margin-right: 8px; 
}

.nav-link:hover, .active-link {
  background-color: #8b0000;
  color: white !important;
}

/* Logout button */
button.btn-dark-red {
  background-color: #8b0000;
  color: white;
  display: flex;
  align-items: center;
  border: none;
}

button.btn-dark-red:hover {
  background-color: #b22222; 
}

button.btn-dark-red i {
  margin-right: 8px;
}

body {
  margin: 0;
  padding: 0;
}
</style>
