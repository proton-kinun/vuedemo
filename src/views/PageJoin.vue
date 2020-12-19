<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="2">
        <v-btn @click.stop="register" elevation="2">
          Register vladol
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageJoin',

  methods: {
    register () {
      this.$auth.signup({
        connection: 'Username-Password-Authentication',
        email: 'vladislav.ladicky@gmail.com',
        password: 'vladol',
        user_metadata: { first: 'Vladislav', last: 'Ladický' }
      }, function (err) {
        if (err) return console.log(err);
        return console.log('success signup without login!')
      })
    }
  }
}
</script>
