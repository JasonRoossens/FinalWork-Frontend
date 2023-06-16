<script>
import router from '../router'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async fetchData() {
      const data = {
        email: this.email,
        password: this.password,
      }
      try {
        //console.log(data)
        const response = await fetch('http://localhost:8080/users/login', {
          method: 'POST',
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',  
          },
          body: JSON.stringify(data),
        })
        const responseData = await response.json()
        if (response.ok) {
          console.log(responseData)
          router.push('/releases') // Redirect to '/releases' after successful login
        }
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
        <h1>Log in</h1>
        <h2>Log in with your account.</h2>
        <!-- Requirement -->
  
        <label for="email"><b>Email</b></label>
        <input type="text" v-model="email" name="email" required>
  
        <label for="psw"><b>Password</b></label>
        <input type="password" v-model="password" name="psw" required>
  
        <button type="submit" class="signinbtn">Log in</button>
  
        <!-- <a href="Login">Forgotten password?</a> -->
        <div class="line"></div>
        <router-link to="/register" class="register">Register</router-link>
      </section>
    </form>
  </template>
  
  <style scoped>
  #container {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
    width: 20%;
    margin: 0 auto;
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
  
  .line {
    margin: 20px 0;
    border-bottom: 1px solid #ccc;
  }
  
  .register {
    text-decoration: none;
    color: #c4d663;
    font-weight: bold;
  }
  </style>