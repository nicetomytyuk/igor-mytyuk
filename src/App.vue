<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
<template>
    <Header></Header>
    <RouterView />
    <div class="flex-1"></div>
    <Footer></Footer>
</template>
<style scoped>
  
</style>