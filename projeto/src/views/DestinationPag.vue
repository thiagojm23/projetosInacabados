<template>
  <div id="main">
    <div id="planetaImagem">
      <h2><strong>01</strong> PICK YOURS DESTINATION</h2>
      <PlanetasDestination id="fotoDoPlaneta" :imagem="imagem" />
    </div>
    <div id="informacoesPlanetas">
      <ul id="planetas">
        <li
          @click="escolherPlaneta($event.target.outerText)"
          :class="{ sublinado: titulo == 'MOON' }"
        >
          MOON
        </li>
        <li
          @click="escolherPlaneta($event.target.outerText)"
          :class="{ sublinado: titulo == 'MARS' }"
        >
          MARS
        </li>
        <li
          @click="escolherPlaneta($event.target.outerText)"
          :class="{ sublinado: titulo == 'EUROPA' }"
        >
          EUROPA
        </li>
        <li
          @click="escolherPlaneta($event.target.outerText)"
          :class="{ sublinado: titulo == 'TITAN' }"
        >
          TITAN
        </li>
      </ul>
      <PlanetasDestination
        id="descricaoDoPlaneta"
        :titulo="titulo"
        :descricao="descricao"
        :distanciaKmPlaneta="distanciaKmPlaneta"
        :distanciaDiasPlanetas="distanciaDiasPlaneta"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PlanetasDestination from '../components/PlanetasDestination.vue'

const titulo = ref('MOON')
const imagem = ref(caminhoImagemMoon)
const descricao = ref(
  'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
)
const distanciaKmPlaneta = ref('384,400 KM')
const distanciaDiasPlaneta = ref('3 DAYS')

function escolherPlaneta(planetaEscolhido) {
  switch (planetaEscolhido) {
    case 'MOON':
      titulo.value = 'MOON'
      imagem.value = caminhoImagemMoon
      descricao.value =
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
      distanciaKmPlaneta.value = '384,400 KM'
      distanciaDiasPlaneta.value = '3 DAYS'
      break
    case 'MARS':
      titulo.value = 'MARS'
      imagem.value = caminhoImagemMars
      descricao.value =
        'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
      distanciaKmPlaneta.value = '225 MIL. KM'
      distanciaDiasPlaneta.value = '9 MONTHS'
      break
    case 'EUROPA':
      titulo.value = 'EUROPA'
      imagem.value = caminhoImagemEuropa
      descricao.value =
        'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
      distanciaKmPlaneta.value = '628 MIL. KM'
      distanciaDiasPlaneta.value = '3 YEARS'
      break
    case 'TITAN':
      titulo.value = 'TITAN'
      imagem.value = caminhoImagemTitan
      descricao.value =
        'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
      distanciaKmPlaneta.value = '1.6 BIL. KM'
      distanciaDiasPlaneta.value = '7 YEARS'
  }
}

/*export default {
  components: {
    PlanetasDestination
  },
  data() {
    return {}
  }
}*/
//Caminhos das imagens
import caminhoImagemMoon from '../assets/destination/image-moon.png'
import caminhoImagemMars from '../assets/destination/image-mars.png'
import caminhoImagemEuropa from '../assets/destination/image-europa.png'
import caminhoImagemTitan from '../assets/destination/image-titan.png'
</script>

<style lang="scss" scoped>
@mixin dflex($flex-direction) {
  display: flex;
  flex-direction: $flex-direction;
}

.sublinado {
  border-bottom: 2px solid;
  z-index: 1;
}

#main {
  @include dflex(row);
  gap: 80px;
  #planetaImagem {
    @include dflex(column);
    margin: 0% 0 4% 15%;
    width: 100%;
    justify-content: center;
    gap: 80px;
    word-spacing: 5px;
    letter-spacing: 2px;
    color: white;
    #fotoDoPlaneta {
      margin-left: 30px;
    }
    h2 {
      font-family: Barlow Condensed;
      font-weight: 400;
      strong {
        color: gray;
      }
    }
  }

  #informacoesPlanetas {
    @include dflex(column);
    justify-content: center;
    margin-right: 20%;
    gap: 50px;
    color: white;
    #planetas {
      @include dflex(row);
      gap: 35px;
      li {
        font-family: Barlow Condensed;
        font-size: larger;
        list-style: none;
        padding-bottom: 5px;
        cursor: pointer;

        &:hover {
          border-bottom: 2px solid rgb(123, 122, 122);
        }
      }
    }
    #descricaoDoPlaneta {
      font-family: Barlow;
      line-height: 30px;
      color: #d0d6f9;
    }
  }
}
</style>
