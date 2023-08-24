<template>
    <div id="foot">
        <div class="logo-botoom">
        <img src="../assets/images/logo.png" alt="Logo" class="logo-image-bottom" />
      </div>

      <div>
        <button class="social-btn">
        <router-link to=""><font-awesome-icon :icon="['fab', 'twitter']" /></router-link>
      </button>
      <button class="social-btn">
        <router-link to=""><font-awesome-icon :icon="['fab', 'facebook']" /></router-link>
      </button>
      <button class="social-btn">
        <router-link to=""><font-awesome-icon :icon="['fab', 'instagram']" /></router-link>
      </button>
      </div>
    </div>
  </template>

  <script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faTwitter, faFacebook, faInstagram);

</script>
  
  <style>
  #foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #24272C;
    position:fixed;
    padding: 10px;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    font-family: 'LemonMilkRegular', sans-serif;
  }
  
  
  .logo-bottom {
    text-align: center;
  }
  
  .logo-image-bottom {
    height: 30px;
    width: auto;
    padding-left: 20px;
  }
  
  @font-face {
    font-family: 'LemonMilkRegular';
    src: url('../assets/fonts/LEMONMILK-Regular.otf');
  }
  
  .social-btn{
    font-family: 'LemonMilkRegular', sans-serif;
    text-decoration: none;
    opacity: 1;
    background-color: #24272C;
    font-size: 1em;
    text-transform: capitalize;
    border: none;
    margin-left: 10px;
    border-radius: 5px;;
    margin-right: 10px;
  }

  .social-btn a{
    text-decoration: none;
    color: #c4d663;
    font-size: 20px;
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
  </style>