<template>
  <div id="bg"></div>
  <main>
    <Navigation />
    <div v-if="user" class="user-profile">
      <h1 class="h1-user">User Profile</h1>
      <div class="user-details">
        <p><strong>Firstname:</strong> {{ user.firstname }}</p>
        <p><strong>Lastname:</strong> {{ user.lastname }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p>
          <strong>Password:</strong>
          <span v-if="showPassword">{{ user.password }}</span>
          <span v-else>**********</span>
          <button @click="togglePasswordVisibility" class="password-button">
            {{ showPassword ? 'Hide' : 'Show' }} Password
          </button>
        </p>
      </div>
      <!-- Edit form -->
      <!-- Edit button to trigger lightbox popup -->
      <div class="edit-button-container">
        <button @click="openEditPopup" class="edit-button">Edit Profile</button>
      </div>

  <div v-if="showEditPopup" class="lightbox">
        <div class="lightbox-content">
          <h2>Edit Profile</h2>
          <form @submit.prevent="updateUser" class="edit-form"> <div class="form-group">
        <label for="firstname">Firstname</label>
        <input v-model="editedUser.firstname" type="text" id="firstname" required />
      </div>
      <div class="form-group">
        <label for="lastname">Lastname</label>
        <input v-model="editedUser.lastname" type="text" id="lastname" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="editedUser.email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="editedUser.password" type="password" id="password" required />
      </div>
          </form>
        </div>
      </div>
      <!-- Lightbox popup for edit form -->
      <div v-if="showEditPopup" class="lightbox">
        <div class="lightbox-content">
          <form @submit.prevent="updateUser" class="edit-form">
            <!-- ... Form inputs ... -->
            <button type="submit" class="save-button">Save Changes</button>
          </form>
          <button @click="closeEditPopup" class="close-button">Close</button>
        </div>
      </div>
      <!-- Display favorites -->
      <div v-if="favorites.length > 0" class="favorites-section">
        <h2 class="h2-user">Favorites</h2>
        <ul class="favorites-list">
          <li v-for="favorite in favorites" :key="favorite.id" class="favorite-item">
            <img :src="favorite.images[0]" :alt="favorite.brand" class="favorite-image" />
            <div class="favorite-details">
              <p><strong>{{ favorite.brand }}</strong></p>
              <p>{{ favorite.model }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Loading user data...</p>
    </div>
  </main>
</template>

<script>
import router from '../router';
import Navigation from '../components/Nav.vue';

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      user: null,
      editedUser: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      },
      showPassword: false,
      favorites: [], // New data property to store favorites
      showEditPopup: false,
    };
  },
  mounted() {
    this.fetchUserData();
    this.fetchFavorites();
  },
  methods: {
    async fetchUserData() {
        try {
          const userId = localStorage.getItem('id'); // Get the user ID from local storage
          const response = await fetch(`https://sneakpeek-backend.onrender.com/users/user/${userId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          });
  
          if (response.ok) {
            const userData = await response.json();
            this.user = userData;
  
            // Log the user data to the console
            console.log('User Data:', this.user);
          } else {
            // Handle errors if needed
            console.error('Error fetching user data');
            router.push('/'); // Redirect to home page or handle the error appropriately
          }
        } catch (error) {
          console.error(error);
        }
      },
    async fetchFavorites() {
      try {
        const userId = localStorage.getItem('id'); // Get the user ID from local storage
        const response = await fetch(`https://sneakpeek-backend.onrender.com/favorites/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        if (response.ok) {
          const favoritesData = await response.json();
          this.favorites = favoritesData;
        } else {
          // Handle errors if needed
          console.error('Error fetching favorites');
        }
      } catch (error) {
        console.error(error);
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async updateUser() {
      try {
        const userId = localStorage.getItem('id'); // Get the user ID from local storage
        const response = await fetch(`https://sneakpeek-backend.onrender.com/users/user/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify(this.editedUser),
        });

        if (response.ok) {
          const updatedUserData = await response.json();
          this.user = updatedUserData;
          console.log('User data updated:', updatedUserData);
        } else {
          // Handle errors if needed
          console.error('Error updating user data');
        }
      } catch (error) {
        console.error(error);
      }
    },
    openEditPopup() {
      this.showEditPopup = true;
    },

    closeEditPopup() {
      this.showEditPopup = false;
    },
  },
};
</script>

<style>
main {
  padding: 50px;
  color: white;
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

.user-profile {
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
}

.user-details {
  text-align: center;
  margin-bottom: 20px;
}

.user-details p{
  padding: 10px;
}

.password-button {
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.favorites-section {
  margin-top: 30px;
}

.favorites-list {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content:flex-start;
  padding: 0;
  list-style: none;
}

.favorite-item {
  width: calc(20% - 10px); /* 20% width with some margin in between */
  margin-bottom: 20px;
  text-decoration: none;
}

.favorite-item-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.favorite-image {
  width: 200px;
  height: auto;
  margin-right: 10px;
}

.favorite-details {
  flex-grow: 1;
}

.favorite-details p {
  margin: 0;
}

.h1-user, .h2-user {
  font-size: 24px;
  font-family: LemonMilkRegular;
  text-align: center;
}

p {
  margin: 5px 0;
}

.edit-form {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
}

.edit-button-container{
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.save-button {
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.edit-button{
  text-align: center;
  padding: 10px;
}

@media (max-width: 767px) {
  .user-details {
    text-align: center;
    margin-bottom: 20px;
  }

  .favorites-list {
    display: block;
  }

  .favorite-item {
    width: 100%;
    margin-bottom: 20px;
  }
}
/* ... (your other styles) ... */
</style>
