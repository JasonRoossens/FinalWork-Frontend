<template>
    <div>
      <div id="bg"><img src="../assets/images/black-snkr.jpg" alt=""></div>
      <div id="container">
        <img class="logo" src="../assets/images/logo.png" alt="">
        <section>
          <router-link to="/Login" class="btn">Login</router-link>
          <router-link to="/Register" class="btn">Register</router-link>
        </section>
      </div>
    </div>
  </template>
  
  <style scoped>
  @font-face {
  font-family: 'LemonMilkRegular';
  src: url('../assets/fonts/LEMONMILK-Regular.otf');
}

@font-face {
  font-family: 'LemonMilkBold';
  src: url('../assets/fonts/LEMONMILK-Bold.otf');
}

  #container {
    display: block;
    background-color: #c4d663;
    padding: 20px;
    text-align: center;
    width: 20%;
    margin: 0 auto;
    border-radius: 10px;
  }


.logo {
  width: 50%;
  padding: 20px;
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
  
  h1 {
    font-size: 28px;
    margin-bottom: 20px;
    font-family: 'LemonMilkRegular', sans-serif;
  }
  
  section {
    display: flex;
    justify-content: center;
  }
  
  .btn {
    display: inline-block;
    background-color: black;
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
    font-family: 'LemonMilkRegular', sans-serif;
    opacity: 85%;
  }
  
  .btn:hover {
    background-color: black;
    opacity: 100%;
  }
  </style>