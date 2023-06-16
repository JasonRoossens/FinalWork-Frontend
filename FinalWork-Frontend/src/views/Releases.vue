<script>
import Navigation from '../components/Nav.vue'

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('http://localhost:8080/sneakers');
        const data = await response.json();
        if (response.ok) {
          this.items = data;
          console.log(data)
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
      <h1 class="title">Releases</h1>
      <div class="container">
        <section class="reservationlist">
          <table class="table">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Colorway</th>
                <th>Price</th>
                <th>Images</th>
                <th>Stylecode</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.brand }}</td>
                <td>{{ item.model }}</td>
                <td>{{ item.colorway }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <img v-for="image in item.images" :key="image" :src="image" alt="Release Image" class="release-image">
                </td>
                <td>{{ item.stylecode }}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </template>
  
  <style>
  .main {
    padding: 20px;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .container {
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 4px;
  }

  .release-image {
  width: 100px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
}
  
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 10px;
    text-align: left;
  }
  
  th {
    background-color: #ccc;
    font-weight: bold;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #e6e6e6;
  }
  
  </style>