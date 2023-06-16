<script>
import router from '../router'

export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async fetchData() {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      }
      try {
        const response = await fetch('http://localhost:8080/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        router.push('/Login') // Redirect to login once the user is register
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<template>
    <form @submit.prevent="fetchData">
      <section id="container">
        <h1>Sign up</h1>
        <h2>Fill in this form to create an account.</h2>
        <!-- Requirement -->
        <label for="fname"><b>Firstname</b></label>
        <input v-model="firstname" type="text" name="firstname" required>
  
        <label for="lname"><b>Lastname</b></label>
        <input v-model="lastname" type="text" name="lastname" required>
  
        <label for="email"><b>Email</b></label>
        <input v-model="email" type="email" name="email" required>
  
        <label for="psw"><b>Password</b></label>
        <input v-model="password" type="password" name="psw" required>
  
        <button type="submit" class="createbtn">Create Account</button>
      </section>
    </form>
  </template>
  
  <style scoped>
  #container {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #c4d663;
    color: white;
    padding: 10px 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #c4d663;
  }
  </style>