<template>
  <transition name="slide" mode="out-in">
    <div :key="[titulo, descricao]">
      <img v-if="imagem" :src="imagem" alt="Lua" />
      <div v-if="descricao" id="descricaoPlanetas">
        <h1>{{ titulo }}</h1>
        <p id="descricaoSobreoPlaneta">
          {{ descricao }}
        </p>
        <hr />
        <div id="distanciaETempoDeViagem">
          <div id="distanciaDoPlaneta">
            <p>AVG. DISTANCE</p>
            <h3>{{ distanciaKmPlaneta }}</h3>
          </div>
          <div id="tempoDeViagemDoPlaneta">
            <p>EST. TRAVEL TIME</p>
            <h3>{{ distanciaDiasPlanetas }}</h3>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps(['titulo', 'imagem', 'descricao', 'distanciaKmPlaneta', 'distanciaDiasPlanetas'])
</script>

<style lang="scss" scoped>
div {
  max-height: 320px;

  #descricaoPlanetas {
    display: flex;
    flex-direction: column;
    gap: 30px;
    word-spacing: 2px;
    hr {
      border: 1px solid #383b4b;
    }
    h1 {
      color: #fff;
      font-family: Bellefair;
      font-size: 90px;
      font-style: normal;
      font-weight: 400;
    }
    #distanciaETempoDeViagem {
      display: flex;
      justify-content: space-between;
      p {
        color: #d0d6f9;
        font-family: Barlow Condensed;
        font-size: medium;
      }
      h3 {
        color: #fff;
        font-family: Bellefair;
        font-weight: 400;
        font-size: x-large;
      }
    }
  }
}
img {
  max-height: 100%;
  max-width: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
