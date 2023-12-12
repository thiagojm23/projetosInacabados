<template>
  <main>
    <div id="nav">
      <div id="logo-img">
        <img src="../assets/shared/logo.svg" alt="logo" />
      </div>
      <div id="nav-links">
        <router-link
          :style="{ 'border-bottom': $route.name === 'home' ? '4px solid' : 'none' }"
          to="/"
          ><strong id="home">00</strong> Home</router-link
        >
        <router-link
          :style="{ 'border-bottom': $route.name === 'destination' ? '4px solid' : 'none' }"
          to="/destination"
          ><strong>01</strong> Destination</router-link
        >
        <router-link
          :style="{ 'border-bottom': $route.name === 'crew' ? '4px solid' : 'none' }"
          to="/crew"
          ><strong>02</strong> Crew</router-link
        >
        <router-link
          :style="{ 'border-bottom': $route.name === 'technology' ? '4px solid' : 'none' }"
          to="/technology"
          ><strong>03</strong> Technology</router-link
        >
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
@mixin dflex($flex-direction) {
  display: flex;
  flex-direction: $flex-direction;
}

#nav {
  @include dflex(row);
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 10vh 0 0 5vw;

  #nav-links {
    @include dflex(row);
    align-items: center;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.774227142333984px);
    padding: 30px 10vw 0px 8vw;
    gap: 70px;
    z-index: 0;

    a {
      text-decoration: none;
      font-family: Barlow Condensed;
      font-size: 20px;
      color: #fff;
      padding-bottom: 26px;
      z-index: 21;

      strong {
        margin-right: 5px;
      }

      #home {
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          width: 100dvw;
          height: 1.5px;
          right: 95%;
          background-color: white;
          cursor: auto;
        }
      }
    }
  }
  #logo-img {
    position: relative;
    height: 50px;
    z-index: 1;
    padding-left: 10px;
  }
}
</style>
