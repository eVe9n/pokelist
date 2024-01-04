import { defineStore } from 'pinia';
import axios from 'axios'

const pokeListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=200'
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'
const pokeTypeUrl = 'https://pokeapi.co/api/v2/type/'

export const usePokeDataStore = defineStore('pokeData', {
  state: () => ({
    pokeDataListOriginal: [],
    pokeDataList: [],
    pokeInfoSelected: [],
    typesFilter: [
      {name: "normal"},
      {name: "fighting"},
      {name: "flying"},
      {name: "poison"},
      {name: "ground"},
      {name: "rock"},
      {name: "bug"},
      {name: "ghost"},
      {name: "steel"},
      {name: "fire"},
      {name: "water"},
      {name: "grass"},
      {name: "electric"},
      {name: "psychic"},
      {name: "ice"},
      {name: "dragon"},
      {name: "dark"},
      {name: "fairy"}
    ]
  }),
  getters: {},
  actions: {
    getPokeListApi() {
      axios.get(pokeListUrl)
      .then(response => {
        this.addPokeList(response.data.results)
        this.pokeDataListOriginal = this.pokeDataList
      })
      .catch(error => console.log(error))
    },
    getPokeInfoApiByName(pokeName) {
      axios.get(pokeUrl + pokeName)
      .then(response => (
         this.setPokeInfoSelected(response.data)
      ))
      .catch(error => console.log(error))
    },
    getPokeSearchedApiByType(pokeType) {
      let apiResponse = []
      this.addPokeList([]),
      axios.get(pokeTypeUrl + pokeType)
      .then(response => {
        apiResponse = response.data.pokemon
        for (let i = 0; i < apiResponse.length; i++) {
          this.pokeDataList.push(apiResponse[i].pokemon)
        }
    })
      .catch(error => (
        console.log(error),
        this.getPokeListApi()
      ))
    },
    addPokeList(pokeList) {
      this.pokeDataList = pokeList;
    },
    setPokeInfoSelected(pokeSelected) {
      this.pokeInfoSelected = pokeSelected;
    },
  },
});