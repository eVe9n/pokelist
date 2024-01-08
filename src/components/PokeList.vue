<script setup>
import { usePokeDataStore } from './../stores/pokeDataStore';
import router from './../router';

const pokeData = usePokeDataStore();
let nameFilter = '';
let typeFilter = '';

pokeData.getPokeListApi();

const openPoke = (pokeName) => {
  router.push({ path: '/pokeone/' + pokeName });
};

const searchByName = () => {
  pokeData.addPokeList(
    pokeData.pokeDataListOriginal.filter((e) => {
      return e.name.toLowerCase().includes(nameFilter.toLowerCase());
    }),
  );
};

const searchByType = (pokeType) => {
  typeFilter = pokeType;
  pokeData.getPokeSearchedApiByType(pokeType);
};
</script>

<template>
  <h1>{{ $t('title') }}</h1>
  <div class="filters-container">
    <h3>Filters</h3>
    <div class="filter">
      <label
        >Name
        <input type="text" v-model="nameFilter" @input="searchByName" />
      </label>
    </div>
    <div class="filter">
      <div
        v-for="(type, index) in pokeData.typesFilter"
        :key="index"
        @click="searchByType(type.name)"
        :class="[
          'type-filter',
          {
            typeSelected: type.name == typeFilter,
          },
        ]"
      >
        {{ type.name }}
      </div>
    </div>
  </div>
  <div class="pokelist-container">
    <div v-for="(pokeData, index) in pokeData.pokeDataList" :key="index" @click="openPoke(pokeData.name)">
      <span> {{ pokeData.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1vw;
  margin: 2vh 0vw;
}
.filters-container {
  margin: 2vh 0vw;
}
.pokelist-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2vw;
  height: 50vh;
  overflow: auto;
}
.pokelist-container::-webkit-scrollbar {
  width: 0.5vw;
}
.pokelist-container::-webkit-scrollbar-track {
  background-color: #5d6365;
}
.pokelist-container::-webkit-scrollbar-thumb {
  background-color: #999d9e;
  border-radius: 20px;
}
.pokelist-container::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
.pokelist-container div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19vw;
  height: 14vh;
  border: 1px solid rgb(5, 148, 77);
}
.pokelist-container span {
  text-transform: uppercase;
  font-weight: bold;
}
.type-filter {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  border-radius: 12%;
  background: blue;
  height: 3.5vh;
  width: 10vw;
  font-size: 1.5vw;
}
.typeSelected {
  background: orange;
}
</style>
