<template>
  <div :class="$route.name">
    <NavBar id="nave" />
    <transition name="slide" mode="out-in">
      <div :key="[Home, Destination, Crew, Technology]" id="conteudo">
        <Home v-if="$route.name == 'home'" />
        <Destination v-if="$route.name == 'destination'" />
        <Crew v-if="$route.name == 'crew'" />
        <Technology v-if="$route.name == 'technology'" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import NavBar from './views/NavBar.vue'
import Home from './views/HomePag.vue'
import Destination from './views/DestinationPag.vue'
import Crew from './views/CrewPag.vue'
import Technology from './views/TechnologyPag.vue'
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#nave {
  height: 30vh;
}

@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@200;700&family=Bellefair&display=swap');
</style>
<style lang="scss" scoped>
#conteudo {
  color: white;
  height: 70vh;
}
.home {
  height: 100vh;
  background-image: url('./assets/home/background-home-desktop.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: auto;
  overflow-x: hidden;
}
.destination {
  height: 100vh;
  background-image: url('./assets/destination/background-destination-desktop.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: auto;
  overflow-x: hidden;
}
.crew {
  height: 100vh;
  background-image: url('./assets/crew/background-crew-desktop.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: auto;
  overflow-x: hidden;
}
.technology {
  height: 100vh;
  background-image: url('./assets/technology/background-technology-desktop.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: auto;
  overflow-x: hidden;
}
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
