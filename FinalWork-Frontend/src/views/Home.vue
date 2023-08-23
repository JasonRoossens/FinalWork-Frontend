<template>
  <div class="main">
    <div id="bg"></div>
    <Navigation />
    <h1 class="title">Upcoming releases</h1>
    <div class="container">
      <section class="sneakerlist">
        <div class="card-container">
          <div
            v-for="item in items"
            :key="item.id"
            class="card"
          >
            <div class="favorites-button-container">
              <button
                class="favorites-button"
                @click="toggleFavorite(item.id)"
              >
                {{ isFavorite(item.id) ? 'Remove from Favorites' : 'Add to Favorites' }}
              </button>
            </div>
            <div class="card-image">
              <img
                v-for="image in item.images"
                :key="image"
                :src="image"
                alt="Release Image"
                class="release-image"
              />
            </div>
            <div class="card-details">
              <p class="brand">{{ item.brand }}</p>
              <p class="model">{{ item.model }}</p>
              <p class="countdown">{{ countdown }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Nav.vue';

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      items: [],
      releaseDate: '2023-06-20T00:00:00.000Z',
      countdown: '',
    };
  },
  mounted() {
    this.fetchData();
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('http://localhost:8080/sneakers');
        const data = await response.json();
        if (response.ok) {
          this.items = data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    updateCountdown() {
      // ... Your existing countdown logic ...
    },
    async toggleFavorite(sneakerId) {
      try {
        // Get the user ID from local storage
        const userId = localStorage.getItem('id');

        // Check if the sneaker is already favorited
        const isAlreadyFavorite = await this.isFavorite(sneakerId);

        if (isAlreadyFavorite) {
          // Send a DELETE request to remove the sneaker from favorites
          const response = await fetch(
            `http://localhost:8080/favorites/${userId}/remove/${sneakerId}`,
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
            `http://localhost:8080/favorites/${userId}/add/${sneakerId}`,
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
    async isFavorite(sneakerId) {
      try {
        // Get the user ID from local storage
        const userId = localStorage.getItem('id');

        // Send a GET request to check if the sneaker is in the user's favorites
        const response = await fetch(
          `http://localhost:8080/favorites/${userId}`
        );

        if (response.ok) {
          const favorites = await response.json();
          console.log('Favorites:', favorites); // Add this line
          return favorites.some((favorite) => favorite.id === sneakerId);
        } else {
          console.log('Error fetching favorites'); // Add this line
          // Handle errors
          return false;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
};
</script>


<style>
.main {
  padding: 20px;
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
  justify-content: space-between
}

.card {
  width: calc(20% - 10px); /* Adjust the width and spacing as needed */
  margin-bottom: 20px;
  background-color: #fff;
  cursor: pointer;
}

.card-events {
  width: calc(10% - 10px); /* Adjust the width and spacing as needed */
  margin-bottom: 20px;
  background-color: #fff;
  cursor: pointer;
}

.card:hover {
  background-color: #eee;
}

.card-image {
  text-align: center;
}

.card-image img {
  width: 70%; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  margin: 10px;
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
}
</style>