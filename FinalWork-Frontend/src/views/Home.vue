<template>
    <div>
      <div id="container">
        <h1>Sneak peek</h1>
        <section>
          <router-link to="/Login" class="btn">Login</router-link>
          <router-link to="/Register" class="btn">Register</router-link>
        </section>
      </div>
    </div>
  </template>
  
  <style scoped>
  #container {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  section {
    display: flex;
    justify-content: center;
  }
  
  .btn {
    display: inline-block;
    background-color: #c4d663;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 10px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #c4d663;
  }
  </style>