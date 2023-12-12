<template>
  <div id="main">
    <div id="texto">
      <h3>SO, YOU WANT TO TRAVEL TO</h3>
      <h1>SPACE</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
        out of this world experience!
      </p>
    </div>
    <div :class="{ borda: alterarExploreBorda }" id="explore-borda">
      <RouterLink
        @mouseover="alterarExploreBorda = !alterarExploreBorda"
        @mouseleave="alterarExploreBorda = !alterarExploreBorda"
        id="explore"
        to="/destination"
        >EXPLORE</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const alterarExploreBorda = ref(false)
</script>

<style lang="scss" scoped>
@mixin dflex($flex-direction) {
  display: flex;
  flex-direction: $flex-direction;
}
#main {
  @include dflex(row);
  justify-content: space-between;
  align-items: center;

  #texto {
    @include dflex(column);
    margin: 0% 0 2% 15%;
    color: white;
    width: 30%;
    max-width: min-content;
    h3 {
      font-family: Barlow Condensed;
      font-weight: 400;
      font-size: 30px;
      word-spacing: 5px;
    }
    h1 {
      font-family: Bellefair;
      font-weight: 400;
      font-size: 150px;
    }
    p {
      color: #d0d6f9;
      font-family: Barlow;
      text-align: justify;
    }
  }
  #explore-borda {
    @include dflex(row);
    padding: 55px 45px 55px 45px;
    border-radius: 50%;
    margin: 5% 15% 0 0;
    transition: 0.2s ease;
  }
  #explore {
    padding: 80px 40px 80px 40px;
    background-color: white;
    border-radius: 50%;
    letter-spacing: 3px;
    font-size: x-large;
    font-family: Bellefair;
    text-decoration: none;
    color: black;
  }
}
.borda {
  background-color: rgba(255, 255, 255, 0.15);
  transition: 0.2s ease;
}
</style>
