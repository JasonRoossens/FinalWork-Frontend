<template>
    <div id="foot">
        <div class="logo-botoom">
        <img src="../assets/images/logo.png" alt="Logo" class="logo-image-bottom" />
      </div>
      
  
      <!-- Show user's firstname and "Logout" button if logged in -->
    
  
      <!-- Show "Login" and "Sign up" buttons if not logged in -->
      <div>
        <button class="social-btn"><router-link to="">Twitter</router-link></button>
        <button class="social-btn"><router-link to="">Facebook</router-link></button>
        <button class="social-btn"><router-link to="">Instagram</router-link></button>
      </div>
    </div>
  </template>
  
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
    background-color: #c4d663;
    font-size: 1em;
    text-transform: capitalize;
    padding: 10px 10px 10px 10px;
    border: none;
    margin-left: 10px;
    border-radius: 5px;;
  }

  .social-btn a{
    text-decoration: none;
    color: black;
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