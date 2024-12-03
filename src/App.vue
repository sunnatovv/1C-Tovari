<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>
<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
    
  </div>
</template>
