<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">
          Ukážka stránky s údajmi načítanými z externého api
        </h1>
      </v-col>

      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="heroes"
          :loading="isLoading"
          :items-per-page="5"
          class="elevation-1"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageHeroes',

  data () {
    return {
      heroes: [],
      isLoading: false,
      endpoint: 'https://swapi.dev/api/people/',
      headers: [
        { text: 'Meno', value: 'name', sortable: true },
        { text: 'Výška', value: 'height', sortable: true },
        { text: 'Hmotnosť', value: 'mass', sortable: true },
        { text: 'Rok narodenia', value: 'birth_year', sortable: true }
      ]
    }
  },

  methods: {
    async loadHeroes (endpoint) {
      const data = await fetch(endpoint)
      const { results } = await data.json()
      return results
    }
  },

  created () {
    this.isLoading = true

    setTimeout(async () => {
      this.heroes = await this.loadHeroes(this.endpoint)
      this.isLoading = false
    }, 3000)
  }
}
</script>
