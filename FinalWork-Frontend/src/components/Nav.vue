<template>
    <div id="nav">
      <router-link to="/releases" class="nav_btn">Home</router-link>
      <router-link v-if="adminPage" to="/Admin" class="nav_btn">Manager</router-link>
      <router-link to="/Overview" class="nav_btn">Overview</router-link>
      <router-link to="/Reservation" class="nav_btn">Room</router-link>
      <router-link to="/Login" class="nav_btn">Logout</router-link>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      adminPage() {
        return this.$route.name === 'admin';
      },
    },
  };
  </script>
  
  <style>
  #nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f2f2f2;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  
  .nav_btn {
    text-decoration: none;
    opacity: 1;
    color: blue;
    letter-spacing: 3px;
    font-weight: 700;
    font-size: 1.3em;
    text-transform: capitalize;
  }
  
  .nav_btn:hover {
    opacity: 0.5;
  }
  </style>