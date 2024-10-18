<template>
  <div id="app" class="d-flex flex-column">
    <!-- Main Content Wrapper -->
    <div class="content-wrapper d-flex flex-column flex-grow-1 w-100">
      <router-view class="content flex-grow-1 dashboard-indent" />
      
      <AppFooter v-if="showFooter" />
    </div>
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "AppRoot",
  components: {
    AppFooter,
  },
  computed: {
    showFooter() {
      // Hide footer on login page, show on all other pages
      return this.$route.name !== 'Login';
    },
  },
};
</script>

<style scoped>
/* Ensure the app takes full width and height */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background-color: #000000;
}

/* Main content and footer take full remaining space */
.content-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}

.content {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  background-color: #000000;
  color: white;
}

</style>
