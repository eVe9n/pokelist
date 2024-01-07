<script setup>
import { usePokeDataStore } from './../stores/pokeDataStore';

const props = defineProps(['name']);

const pokeData = usePokeDataStore();
pokeData.getPokeInfoApiByName(props.name);
</script>

<template>
  <div>
    <h1>{{ $t('subtitle') + $route.params.name }}</h1>
    <div class="image-container">
      <img :src="pokeData.pokeInfoSelected.sprites.front_default" />
      <img :src="pokeData.pokeInfoSelected.sprites.back_default" />
      <img :src="pokeData.pokeInfoSelected.sprites.front_shiny" />
      <img :src="pokeData.pokeInfoSelected.sprites.back_shiny" />
      <img :src="pokeData.pokeInfoSelected.sprites.front_female" />
      <img :src="pokeData.pokeInfoSelected.sprites.back_female" />
      <img :src="pokeData.pokeInfoSelected.sprites.front_shiny_female" />
      <img :src="pokeData.pokeInfoSelected.sprites.back_shiny_female" />
    </div>
    <div v-if="pokeData.pokeInfoSelected.abilities.length">
      <h5 class="separator"></h5>
      <h2>{{ $t('abilities') }}</h2>
      <div v-for="(abilityData, index) in pokeData.pokeInfoSelected.abilities" :key="index">
        <span> {{ abilityData.ability.name }}</span>
      </div>
    </div>
    <div v-if="pokeData.pokeInfoSelected.held_items.length">
      <h5 class="separator"></h5>
      <h2>{{ $t('held') }}</h2>
      <div v-for="(heldData, index) in pokeData.pokeInfoSelected.held_items" :key="index">
        <span> {{ heldData.item.name }}</span>
      </div>
    </div>
    <div v-if="pokeData.pokeInfoSelected.moves.length">
      <h5 class="separator"></h5>
      <h2>{{ $t('moves') }}</h2>
      <div v-for="(moveData, index) in pokeData.pokeInfoSelected.moves" :key="index">
        <span> {{ moveData.move.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 59vw;
  margin: 0vh auto;
}
.separator {
  height: 0.1vh;
  background: #ccc;
}

span {
  text-transform: capitalize;
}
</style>
