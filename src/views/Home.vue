<template>
  <div class="main">
    <div id="bg"></div>
    
    <Navigation />
    <Chatbot />
    
    <h1 class="title">Upcoming releases</h1>
    <div class="container">
      <section class="sneakerlist">
        <div class="filter-container">
          <label for="sortOption">Sort by:</label>
          <select id="sortOption" v-model="sortOrder" class="filter-select">
            <option value="releasedate">Release now - later</option>
            <option value="latest">Release later - now</option>
          </select>
          <label for="brandFilter">Filter by Brand:</label>
          <select id="brandFilter" v-model="selectedBrand" class="filter-select">
            <option value="">All Brands</option>
            <option v-for="brand in uniqueBrands" :key="brand" :value="brand">{{ brand }}</option>
          </select>
          <label for="colorFilter">Filter by Color:</label>
          <select id="colorFilter" v-model="selectedColor" class="filter-select">
            <option value="">All Colors</option>
            <option v-for="color in uniqueColors" :key="color" :value="color">{{ color }}</option>
          </select>
          
        </div>
        <div class="sort-container">
          
        </div>
        <div class="card-container">
  <div v-for="item in visibleItems" :key="item.id" class="card">
    <div class="favorites-button-container">
      <button v-if="item.favorite" class="favorites-button" @click="toggleFavorite(item.id, true)"> <font-awesome-icon :icon="['fas', 'heart']" />
        Favorite 
    </button>
    
    <button v-if="!item.favorite" class="favorites-button" @click="toggleFavorite(item.id, false)"> <font-awesome-icon :icon="['far', 'heart']" />
      Add to Favorites
    </button>
</div>
    <router-link :to="'/sneakers/' + item.id" class="sneaker-link">
      <div class="card-image">
        <img v-for="image in item.images" :key="image" :src="image" alt="Release Image" class="release-image" />
      </div>
    </router-link>
    <div class="card-details">
      <p class="brand">{{ item.brand }}</p>
      <p class="model">{{ item.model }}</p>
      <p class="model">{{ item.colorway }}</p>
      <p class="release"><!-- {{ item.releasedate }} - --> {{ countdowns[item.id] }}</p>
    </div>
  </div>
  
  <button v-if="!showAllSneakers" @click="showAllSneakers = true" class="show-more-button">
    Show More
  </button>
  <button v-if="showAllSneakers" @click="showAllSneakers = false" class="show-more-button">
    Show Less
  </button>
</div>
      </section>
      
    </div>
   
  </div>
  <Bottom />
</template>


<script>
import Bottom from '../components/Foot.vue';
import Navigation from '../components/Nav.vue';
import Chatbot from '../components/Chatbot.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';

import router from '../router';

library.add(fasHeart, farHeart);

export default {
  components: {
    Navigation, Bottom, Chatbot
  },
  data() {
    return {
      items: [],
      selectedBrand: '', // Selected brand for filtering
      selectedColor: '', // Selected color for filtering
      sortOrder: 'releasedate', // Default sort order set to release date
      releaseDate: '2023-06-20T00:00:00.000Z',
      countdowns: {},
      showAllSneakers: false,
    };
  },
  /* created() {
    // Update countdown every second
    setInterval(() => {
      this.updateCountdowns();
    }, 1000);
  }, */
  computed: {
    uniqueBrands() {
      // Compute unique brands from the items data
      const brands = new Set();
      this.items.forEach(item => brands.add(item.brand));
      return Array.from(brands);
    },
    uniqueColors() {
      // Compute unique colorways from the items data
      const colorways = new Set();
      this.items.forEach(item => colorways.add(item.colorway));
      return Array.from(colorways);
    },
    sortedAndFilteredItems() {
      let sortedItems = [...this.items];
      if (this.sortOrder === 'releasedate') {
        sortedItems.sort((a, b) => new Date(a.releasedate) - new Date(b.releasedate));
      } else if (this.sortOrder === 'latest') {
        sortedItems.sort((a, b) => new Date(b.releasedate) - new Date(a.releasedate));
      }
      return this.applyFilters(sortedItems);
    },
    visibleItems() {
    const maxVisibleItems = this.showAllSneakers ? this.items.length : 10;
    return this.sortedAndFilteredItems.slice(0, maxVisibleItems);
  },
  },
  mounted() {
    this.fetchData();
    this.updateCountdown();
    // setInterval(this.updateCountdown, 1000);
  },
  methods: {
    async fetchData() {
      try {
        const userId = localStorage.getItem('id');

        const requestToDo = [
        fetch('https://sneakpeek-backend.onrender.com/sneakers')

        ]
        if (userId){
          requestToDo.push(
            fetch(`https://sneakpeek-backend.onrender.com/favorites/${userId}`)
          )
        }
        const allPromise = Promise.all(requestToDo);
        console.log('xxx requestToDo', requestToDo)
        
        const response = await allPromise;
        

        const listOfItems = await response[0].json()


        if (userId){
          const listOfFavorites = await response[1].json()

        console.log(listOfItems, listOfFavorites)

          listOfFavorites.forEach(favorite => {
            const sneaker = listOfItems.find(item => item.id === favorite.id)
            if (sneaker){
                sneaker.favorite = true
            }
          })
        }
        

        this.items = listOfItems;
        console.log(listOfItems)

      } catch (error) {
        console.error(error);
      }
    },
    updateCountdown() {
      // ... Your existing countdown logic ...
    },
    updateCountdowns() {
      this.items.forEach(item => {
        this.countdowns[item.id] = this.formatCountdown(item.releasedate);
      });
    },
    async isFavoriteItem(sneakerId) {
      try {
        const isFav = await this.isFavorite(sneakerId);
        return isFav;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    formatCountdown(releaseDate) {
  const releaseDateTime = new Date(releaseDate).getTime();
  const now = new Date().getTime();
  const countdown = releaseDateTime - now;

  if (countdown <= 0) {
    return "Already Released";
  }

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
},
    async toggleFavorite(sneakerId, isAlreadyFavorite) {
      try {
        const userId = localStorage.getItem('id');
        if (!userId){
          router.push('/login');
        }
        if (isAlreadyFavorite) {
          // Send a DELETE request to remove the sneaker from favorites
          const response = await fetch(
            `https://sneakpeek-backend.onrender.com/favorites/${userId}/remove/${sneakerId}`,
            {
              method: 'DELETE',
              headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
            }
          );

          if (response.ok) {
            // Sneaker removed from favorites successfully
            this.fetchData();
          } else {
            // Handle errors
          }
        } else {
          // Send a POST request to add the sneaker to favorites
          const response = await fetch(
            `https://sneakpeek-backend.onrender.com/favorites/${userId}/add/${sneakerId}`,
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
            }
          );

          if (response.ok) {
            // Sneaker added to favorites successfully
            this.fetchData();
          } else {
            // Handle errors
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    // async isFavorite(sneakerId) {
    //   try {
    //     // Get the user ID from local storage
    //     const userId = localStorage.getItem('id');

    //     // Send a GET request to check if the sneaker is in the user's favorites
    //     const response = await fetch(`https://sneakpeek-backend.onrender.com/favorites/${userId}`);

    //     if (response.ok) {
    //   const favorites = await response.json();
    //   console.log('Favorites:', favorites); // Add this line
      
    //   const isFavorited = favorites.some((favorite) => favorite.id === sneakerId);
    //   console.log(`Is Favorited? ${isFavorited}`,sneakerId, typeof isFavorited); // Add this line
      
    //   return isFavorited;
    //     } else {
    //       console.log('Error fetching favorites'); // Add this line
    //       // Handle errors
    //       return false;
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     return false;
    //   }
    // },
    applyFilters(items) {
      // Apply brand and color filters if selected
      let filteredItems = items;

      if (this.selectedBrand) {
        filteredItems = filteredItems.filter(item => item.brand === this.selectedBrand);
      }

      if (this.selectedColor) {
        filteredItems = filteredItems.filter(item => item.colorway === this.selectedColor);
      }

      return filteredItems;
    },
  },
};
</script>


<style>
.main {
  padding: 100px;
  padding-bottom: 10px;
}

.title {
  font-size: 20px;
  margin-bottom: 20px;
  color: #fff;
  font-family: LemonMilkRegular;
}

.container {
  
  border-radius: 4px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}


.card {
  width: calc(20% - 10px); /* Adjust the width and spacing as needed */
  margin: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 10px;
}

.card-events {
  width: calc(10% - 10px); /* Adjust the width and spacing as needed */
  margin-bottom: 20px;
  background-color: #fff;
  cursor: pointer;
}

.card-image:hover {
  background-color: #eee;
}

.card-image {
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
}

.card-image img {
  width: 70%; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  margin: 10px;
  border-radius: 10px;
}

.card-details {
  padding: 20px;
  background-color: #0B0E0F;
  color: #fff;
}

.brand {
  font-weight: bold;
}

.model {
  color: #999;
}

.countdown {
  font-size: 14px;
  color: #888;
  margin-top: 5px;
  font-weight: 700;
}

#bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #0B0E0F;
}

#bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.favorites-button-container{
  text-align: center;
  margin-bottom: 10px;
  z-index: 999;
  cursor: default;
}

.favorites-button{
  background-color: #24272C;
  color: white;
  border: solid 2px #c4d663;
  border-radius: 10px;
  padding: 8px;
  font-family: LemonMilkRegular;
  cursor: pointer;
}

.show-more-button{
  text-align: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #0B0E0F;
  border: none;
  color: white;
  font-family: LemonMilkRegular;
  cursor: pointer;
  width: 100%;
}

.favorites-icon {
  
  top: 10px;
  right: 10px;
  color: red; /* Set your desired icon color */
  cursor: pointer;
  text-align: right;
  padding-right: 10px;
  font-size: 20px;
}

/* Responsive Styles */
@media (max-width: 767px) {
  h1{
    display: none;
  }
  .card {
    width: calc(100% - 10px);
  }
  .container {
    margin-top: 80px;
  padding: 0px;
  border-radius: 4px;
}
  #app{
    padding: 1rem;
  }
  .filter-select {
    padding: 8px;
    padding-right: 20px;
    border: 1px solid #777;
    background-color: #24272C;
    color: #fff;
    border-radius: 4px;
    margin: 7px;
    margin-right: 25px;
    width: 100%;
}
}
.filter-container,
.sort-container {
  margin-bottom: 30px;
  color: white;
  font-weight: bold;
}

.filter-select {
  padding: 8px;
  padding-right: 20px;
  border: 1px solid #777;
  background-color: #24272C;
  color: #fff;
  border-radius: 4px;
  margin: 7px;
  margin-right: 25px;
  
}

.sort-select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 20px;
}

.filter-container .label{
  padding: 10px;
  
}

@media (max-width: 480px) {
  .main {
    padding: 20px;
    padding-bottom: 10px;
}
.filter-select {
    padding: 8px;
    padding-right: 20px;
    border: 1px solid #777;
    background-color: #24272C;
    color: #fff;
    border-radius: 4px;
    margin: 7px;
    margin-right: 25px;
    width: 100%;
}
}
</style>