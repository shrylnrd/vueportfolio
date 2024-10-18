<template>
  <div class="d-flex flex-column" id="wrapper">
    <AppNavbar :username="username" />
    <div class="container-fluid my-4 flex-grow-1">
      <router-view @login-success="setUsername" />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from "../components/AppNavbar.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  components: {
    AppNavbar,
    AppFooter,
  },
  data() {
    return {
      username: '' // Initialize username
    };
  },
  methods: {
    setUsername(name) {
      this.username = name; // Set username from login
    },
  },
};
</script>
