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
        const response = await fetch(`http://localhost:8080/sneakers/sneaker/${sneakerId}`);
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
      <Navigation />
      <div class="container">
        <div v-if="sneaker">
          <h1 class="title">{{ sneaker.brand }} {{ sneaker.model }}</h1>
          <div class="sneaker-details">
            <div class="sneaker-image">
              <img :src="sneaker.images[0]" :alt="sneaker.brand" class="release-image" />
            </div>
            <div class="sneaker-info">
              <p><strong>Colorway:</strong> {{ sneaker.colorway }}</p>
              <p><strong>Price:</strong> {{ sneaker.price }}</p>
              <p><strong>Style Code:</strong> {{ sneaker.stylecode }}</p>
              <!-- Add more details as needed -->
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
  padding: 20px;
}

.container {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 4px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.sneaker-details {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.sneaker-image {
  flex: 1;
  margin-right: 20px;
}

.sneaker-info {
  flex: 2;
}

.release-image {
  width: 200px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* Include your existing styles here or add additional styles as needed */
</style>