<template>
  <div class="heroes-table">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Birth year</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="heroes.length === 0">
          <tr>
            <td colspan="4">Žiadne dáta na zobrazenie</td>
          </tr>
        </template>
        <template v-else>
          <tr v-for="(hero, index) in heroes" :key="index">
            <td>{{ hero.name }}</td>
            <td>{{ hero.height }}</td>
            <td>{{ hero.mass }}</td>
            <td>{{ hero.birth_year }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HeroesTable',

  props: {
    heroes: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.heroes-table {
  table {
    width: 50rem;
    border: 1px solid black;
    border-collapse: collapse;
  }

  th, td {
    padding: .5rem 0;
    border: 1px solid black;
    text-align: center;
  }
}
</style>
