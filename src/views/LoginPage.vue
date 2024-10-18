<template>
  <div class="d-flex align-items-center justify-content-center vh-100" :style="{ backgroundColor: '#000000' }">
    <div class="card p-5" :style="{ width: '400px', backgroundColor: '#000000', border: '1px solid #ff0000'}">
      <h5 class="text-center mb-4" :style="{ color: '#ff0000', fontWeight: 'bold' }">Login</h5>
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
      <div class="form-group">
        <label for="username" :style="{ color: '#ff0000' }">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
          placeholder="Enter username"
          :style="{ backgroundColor: '#000000', borderColor: '#ff0000', color: '#f0ebeb' }"
        />
      </div>
      <div class="form-group mt-3">
        <label for="password" :style="{ color: '#ff0000' }">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Enter password"
          :style="{ backgroundColor: '#000000', borderColor: '#ff0000', color: '#f0ebeb' }"
        />
      </div>
      <button class="btn w-100 mt-4" @click="login" :style="{ backgroundColor: '#8b0000', color: '#FFFFFF', fontWeight: 'bold', }">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '' // to hold the error message if login fails
    };
  },
  methods: {
    login() {
      const validUsername = 'msred'; 
      const validPassword = '2112630';  

      // Check credentials
      if (this.username === validUsername && this.password === validPassword) {
        this.$emit('login-success', this.username); // Emit event with username
        this.$router.push({ name: 'Home' }); // Redirect to the Home page
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    }
  }
};
</script>


<style scoped>
body {
  margin: 0;
  background-color: #000000; 
}
.card {
  border-radius: 20px;
}
</style>
