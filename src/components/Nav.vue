<template>
  <div id="nav">
    <router-link to="/" class="nav_hmbtn">Home</router-link>
    <router-link to="/">
  <div class="logo">
    <img src="../assets/images/logo.png" alt="Logo" class="logo-image" />
  </div>
</router-link>

    <!-- Show user's firstname and "Logout" button if logged in -->
    <div v-if="isLoggedIn">
      <router-link to="/UserPage" class="hello_btn">Hello, {{ firstname }}</router-link>
      <button class="logout-btn" @click="logout">Logout</button>
    </div>

    <!-- Show "Login" and "Sign up" buttons if not logged in -->
    <div v-else>
      <router-link to="/login" class="nav_btn">Log in</router-link>
      <button class="login-btn"><router-link to="/register">Sign up</router-link></button>
    </div>
  </div>
</template>

<script>
import router from '../router';

export default {
  computed: {
    isLoggedIn() {
      // Check if the user's firstname exists in local storage
      return localStorage.getItem('firstname') !== null;
    },
    firstname() {
      // Get the user's firstname from local storage
      return localStorage.getItem('firstname');
    },
  },
  methods: {
    logout() {
      // Remove the accessToken and firstname from local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('id');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    // Refresh the page to update the navigation after logout
    window.location.reload();

    // Redirect the user to the home page or any other desired route after logout
    router.push('/');
    },
  },
};
</script>

<style>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #24272C;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  font-family: 'LemonMilkRegular', sans-serif;
}


.logo {
  flex-grow: 1;
  text-align: center;
}

.logo-image {
  height: 30px;
  width: auto;
  padding-left: 100px;
}

@font-face {
  font-family: 'LemonMilkRegular';
  src: url('../assets/fonts/LEMONMILK-Regular.otf');
}

.login-btn{
  font-family: 'LemonMilkRegular', sans-serif;
  text-decoration: none;
  opacity: 1;
  background-color: #c4d663;
  font-size: 1em;
  text-transform: capitalize;
  padding: 10px 10px 10px 10px;
  border: none;
  border-radius: 5px;;
}

.logout-btn a{
  text-decoration: none;
  color: #000
}

.logout-btn{
  font-family: 'LemonMilkRegular', sans-serif;
  text-decoration: none;
  opacity: 1;
  background-color: #c4d663;
  font-size: 1em;
  text-transform: capitalize;
  padding: 10px 10px 10px 10px;
  border: none;
  border-radius: 5px;;
}

.login-btn a{
  text-decoration: none;
  color: #000
}

.nav_btn {
  font-family: 'LemonMilkRegular', sans-serif;
  text-decoration: none;
  opacity: 1;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1em;
  text-transform: capitalize;
  padding: 0px 30px 0px 30px;
}

.nav_hmbtn {
  font-family: 'LemonMilkRegular', sans-serif;
  text-decoration: none;
  opacity: 1;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1em;
  text-transform: capitalize;
  padding: 0px 30px 0px 30px;
}

.hello_btn{
  font-family: 'LemonMilkRegular', sans-serif;
  text-decoration: none;
  opacity: 1;
  color: #fff;
  padding: 0px 30px 0px 30px;
  letter-spacing: 1px;
}


.nav_icon {
  font-family: 'LemonMilkRegular', sans-serif;
  text-decoration: none;
  opacity: 1;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1em;
  text-transform: capitalize;
  padding: 0px 30px 0px 0px;
  
}

x

.nav_btn:hover {
  opacity: 0.5;
}

@media (max-width: 767px) {
  .hello_btn{
    
  }
  .logo {
  flex-grow: 1;
  text-align: center;
  margin-right: -7%;
}
.login-btn{

}
.logout-btn{
  display: none;
}
}
@media (max-width: 480px) {
  #nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #24272C;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  font-family: 'LemonMilkRegular', sans-serif;
}

.logo-image {
  height: 30px;
  width: auto;
  padding-left: 0px;
}

.nav_btn {
  font-family: 'LemonMilkRegular', sans-serif;
  text-decoration: none;
  opacity: 1;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1em;
  text-transform: capitalize;
  padding: 0px 10px 0px 0px;
}
.login-btn{
  
}
.nav_hmbtn {
  font-family: 'LemonMilkRegular', sans-serif;
  text-decoration: none;
  opacity: 1;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1em;
  text-transform: capitalize;
  padding: 0px 0px 0px 0px;
  margin-left: 10px;
}
.logout-btn{
  display: none;
}
}
</style>