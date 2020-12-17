<template>
  <v-app>
    <v-app-bar app color="primary" dense dark>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        aria-label="zobrazuje menu"
      >
        <v-icon>{{ iconMenu }}</v-icon>
      </v-app-bar-nav-icon>

      <router-link :to="{ name: 'home' }" exact>
        <v-toolbar-title class="white--text">Moja Apka</v-toolbar-title>
      </router-link>

      <v-spacer />

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on">{{ iconLogout }}</v-icon>
        </template>
        <span>Odhlásiť</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer absolute temporary app tag="nav" v-model="drawer" id="drawer">
      <template #prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img :src="avatar" alt="profile photo" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ fullName }}</v-list-item-title>

            <v-list-item-subtitle>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">
                    prihlásený ako {{ userName }}
                  </span>
                </template>
                <span>prihlásený ako {{ userName }}</span>
              </v-tooltip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="{ name: item.name }"
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
import { mdiMenu, mdiLogoutVariant } from '@mdi/js'

export default {
  name: 'Layout',

  data () {
    return {
      items,
      iconMenu: mdiMenu,
      iconLogout: mdiLogoutVariant,
      drawer: false,
      fullName: 'Proton Kinun',
      userName: 'proton-kinun',
      isLoggedIn: true,
      avatar: require('./assets/images/avatar.png')
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Open Sans';
  src: url('./assets/fonts/OpenSans-Regular.ttf');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
</style>