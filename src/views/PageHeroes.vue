<template>
  <div class="page-heroes">
    <h1>Star Wars Heroes</h1>
    <heroes-table :heroes="results" />
  </div>
</template>

<script>
import HeroesTable from '@/components/PageHeroes/HeroesTable'

export default {
  name: 'PageHeroes',

  components: {
    HeroesTable
  },

  data () {
    return {
      results: []
    }
  },

  async created () {
    let data = await fetch('https://swapi.dev/api/people/')
    let { results } = await data.json()
    this.results = results
  }
}
</script>

<style lang="scss" scoped>
.page-heroes {
  min-height: 100%;

  display: grid;
  grid-auto-flow: row;
  place-items: center center;
  place-content: center center;
  gap: 1.6rem 1.6rem;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
