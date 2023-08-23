<template>
    <div class="chatbot">
      <div class="chatbox">
        <div v-for="(message, index) in messages" :key="index" class="message">
          {{ message.text }}
        </div>
      </div>
      <div class="input-box">
        <input v-model="userInput" @keydown.enter="sendMessage" />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [],
        userInput: "",
      };
    },
    methods: {
      sendMessage() {
        if (this.userInput.trim() === "") return;
  
        this.messages.push({ text: this.userInput, isUser: true });
        this.userInput = "";
  
        // Hier moet je de NLP-logica en bot-antwoordverwerking toevoegen
      },
    },
  };
  </script>
  
  <style>
  /* Stijlen voor de chatbot-interface */
  </style>
  