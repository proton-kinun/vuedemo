<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        Vue App
      </v-toolbar-title>
      <v-spacer />
      <v-icon>mdi-logout-variant</v-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <template #prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img :src="avatar" alt="profile photo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ fullname }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ `prihlásený ako ${ username }` }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider />
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.name"
          :to="{ name: item.name }"
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-fade-transition appear mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import items from '@/plugins/router/routes'

export default {
  name: 'Layout',

  data () {
    return {
      items,
      drawer: false,
      avatar: require('./assets/images/avatar.png'),
      fullname: 'Proton Kinun',
      username: 'proton-kinun'
    }
  }
}
</script>
