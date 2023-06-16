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
  <div id="bg"><img src="../assets/images/black-snkr.jpg" alt=""></div>
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
        <div class="line"></div>
        <router-link to="/login" class="login">Login</router-link>
      </section>
    </form>
  </template>
  
  <style scoped>
  #container {
    background-color: #c4d663;
    padding: 20px;
    text-align: center;
    width: 20%;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 28px;
    margin-bottom: 10px;
    color: black;
    font-family: LemonMilkBold;
  }
  
  h2 {
    font-size: 16px;
    margin-bottom: 20px;
    color: black;
    font-family: LemonMilkRegular;
  }

  #bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

#bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  
  label {
    display: block;
    margin-bottom: 10px;
    font-family: LemonMilkRegular;
    color: black;
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
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    font-family: LemonMilkRegular;
    opacity: 85%;
  }
  
  button:hover {
    background-color: black;
    opacity: 100%;
  }
  
  .line {
    margin: 20px 0;
    border-bottom: 1px solid black;
  }
  
  .login {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-family: LemonMilkRegular;
  }
  </style>