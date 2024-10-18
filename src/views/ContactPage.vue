<template>
  <div class="contact-page">

    <div class="contact-info">
      <h1>Contact Us</h1>
      <p>
        Any questions or remarks? Fill out the form with your inquiry.
      </p>
    </div>


    <div class="card glow-card">
      <div class="card-body">
        <form @submit.prevent="sendMessage">
          <div class="mb-3">
            <label for="name" class="form-label">Name*</label>
            <input type="text" class="form-control" id="name" v-model="contact.name" />
            <small v-if="errors.name" class="text-danger">{{ errors.name }}</small>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email*</label>
            <input type="email" class="form-control" id="email" v-model="contact.email" />
            <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message*</label>
            <textarea class="form-control" id="message" v-model="contact.message"></textarea>
            <small v-if="errors.message" class="text-danger">{{ errors.message }}</small>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    sendMessage() {
      // Clear previous errors
      this.errors = {
        name: '',
        email: '',
        message: ''
      };

      // Validate form fields for missing credentials
      let isValid = true;

      if (!this.contact.name) {
        this.errors.name = 'Name is required.';
        isValid = false;
      }
      if (!this.contact.email) {
        this.errors.email = 'Email is required.';
        isValid = false;
      }
      if (!this.contact.message) {
        this.errors.message = 'Message is required.';
        isValid = false;
      }

      // If form is valid, proceed with sending the message
      if (isValid) {
        alert('Message sent!');
      }
    }
  }
};
</script>

<style scoped>

.contact-page {
  display: flex;
  justify-content: center; 
  align-items: center; 
  padding: 60px 100px;
  background-color: #000;
  min-height: 80vh;
}

.contact-info {
  max-width: 700px;
  color: #fff;
  margin-right: 50px;
}

.contact-info h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  color: #fff;
}

.contact-info p {
  font-size: 1.8rem;
  color: #fff;
}


.card {
  max-width: 1000px;
  padding: 45px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 4px 8px #8b0000;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.glow-card:hover {
  box-shadow: 0 0 20px #8b0000;
  transform: scale(1.03);
}

.card-body {
  padding: 15px;
}

.form-control {
  border: 0.2px solid #8b0000;
  font-size: 2.4rem;
  padding: 10px;
  margin-bottom: 15px;
}

textarea.form-control {
  height: 120px; /* Increased height */
}

.text-danger {
  color: #8b0000;
  font-size: 0.875rem;
}

/* Button styling */
.btn-primary {
  background-color: #8b0000;
  border-color: #8b0000;
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
}

.btn-primary:hover {
  background-color: #8b0000;
  border-color: #8b0000;
}

</style>
