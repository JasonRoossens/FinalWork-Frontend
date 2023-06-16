<script>
  export default {
    computed: {
      adminPage() {
        return this.$route.name === 'admin';
      },
    },
  };
  </script>


<template>
  <div id="nav">
    <router-link to="/releases" class="nav_btn">Releases</router-link>
    <div class="logo">
      <img src="../assets/images/logo.png" alt="Logo" class="logo-image" />
    </div>
    <router-link to="/Userpage" class="nav_btn">Account</router-link>
    <router-link to="/Login" class="nav_icon"> <font-awesome-icon :icon="['fas', 'right-from-bracket']" /></router-link>
  </div>
</template>

<style>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
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
  height: 40px;
  width: auto;
}

@font-face {
  font-family: 'LemonMilkRegular';
  src: url('../assets/fonts/LEMONMILK-Regular.otf');
}

.nav_btn {
  font-family: 'LemonMilkRegular', sans-serif;
  text-decoration: none;
  opacity: 1;
  color: black;
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
  color: black;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1em;
  text-transform: capitalize;
  padding: 0px 30px 0px 0px;
  
}

.nav_btn:hover {
  opacity: 0.5;
}
</style>