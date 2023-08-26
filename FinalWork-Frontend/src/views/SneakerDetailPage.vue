<script>
import Navigation from '../components/Nav.vue';

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      sneaker: null,
    };
  },
  mounted() {
    this.fetchSneakerData();
  },
  methods: {
    async fetchSneakerData() {
      try {
        const sneakerId = this.$route.params.id;
        const response = await fetch(`https://sneakpeek-backend.onrender.com/sneakers/sneaker/${sneakerId}`);
        const data = await response.json();
        if (response.ok) {
          this.sneaker = data;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div class="main">
    <div id="bg"></div>

    <Navigation />
    <button @click="$router.push(`/`)" class="back-button">Back</button>
    <div class="container">
      <div v-if="sneaker">
        <h1 class="title-detail">{{ sneaker.brand }} {{ sneaker.model }} {{ sneaker.name ? sneaker.name : ' ' }}</h1>
        <div class="sneaker-details">
          <div class="sneaker-image">
            <img :src="sneaker.images[0]" :alt="sneaker.brand" class="releaseDetail-image" />
          </div>
          <div class="sneaker-info">
            <div class="info-pair">
    <h3><strong>Brand:</strong></h3>
    <p>{{ sneaker.brand }}</p>
  </div>
  <div class="info-pair">
    <h3><strong>Model:</strong></h3>
    <p>{{ sneaker.model }}</p>
  </div>
  <div class="info-pair">
    <h3><strong>Name:</strong></h3>
    <p>{{ sneaker.name ? sneaker.name : 'Coming soon...' }}</p>
  </div>
  <div class="info-pair">
    <h3><strong>Style code:</strong></h3>
    <p>{{ sneaker.stylecode }}</p>
  </div>
  <div class="info-pair">
    <h3><strong>Colorway:</strong></h3>
    <p>{{ sneaker.colorway }}</p>
  </div>
  <div class="info-pair">
    <h3><strong>Release:</strong></h3>
    <p>{{ sneaker.releasedate }}</p>
  </div>
  <div class="info-pair">
    <h3><strong>Price:</strong></h3>
    <p>{{ sneaker.price }} €</p>
  </div>
  <div class="info-pair">
    
   
  </div>
  <h3><strong>Description:</strong></h3>
  <p>{{ sneaker.description ? sneaker.description : 'Coming soon...' }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading sneaker details...</p>
      </div>
    </div>
  </div>
</template>
  
<style>
/* Styles for the SneakerDetailPage component */
.main {
  padding: 100px;
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

.container {
  display: flex; /* Added to enable flex layout */
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  padding: 20px;
  border-radius: 4px;
}

.title-detail {
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: white;
  font-family: LemonMilkRegular;
}

.sneaker-details {
  display: flex;
  margin-top: 20px;
  color: white;
}



.info-pair {
  display: flex;
  margin-right: 20px; /* Add spacing between h3 and p */
  margin-bottom: 15px;
}

h3 {
  font-family: LemonMilkRegular;
  margin-right: 10px; /* Add some spacing between h3 and p */
}

p {
  font-family: Arial, Helvetica, sans-serif;
}


.sneaker-image {
  flex: 1; /* Occupy 33% width */
  margin-right: 20px;
  background-color: white;
  border-radius: 10px;
  max-width: 500px; /* Adjust this value as needed */
  max-height: 500px; /* Adjust this value as needed */
}

.sneaker-image img {
  max-width: 100%; /* Ensure image fits container width */
  border-radius: 10px;
}

.sneaker-info {
  flex: 1; /* Occupy 50% width */
}

.back-button {
  background-color: #c4d663;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
@media (max-width: 767px) {
  .sneaker-details {
    flex-direction: column;
    align-items: center;
  }

  .sneaker-image {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .sneaker-info {
    width: 100%;
  }
}

</style>