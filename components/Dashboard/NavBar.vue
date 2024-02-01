<script setup lang="ts">
import { ref } from "vue"
import appLogo from "@/assets/images/logo.png"

const { data, signOut } = useAuth()
const drawer: Ref<boolean> = ref(false)
</script>

<template>
  <v-navigation-drawer theme="customDark" :elevation="12" v-model="drawer">
    <v-list nav>
      <v-list-item>
        <v-img aspect-ratio="16/9" width="70%" class="mx-auto" cover :src="appLogo"></v-img>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list nav>
      <v-list-item :title="data?.user?.name || 'User'" prepend-icon="mdi-account"></v-list-item>
    </v-list>

    <template v-for="pageRoute in Routes">
      <v-divider></v-divider>

      <v-list v-if="!pageRoute.hasOwnProperty('route') && !pageRoute.hasOwnProperty('path')" nav>
        <v-list-item :title="pageRoute.value" :prepend-icon="pageRoute.icon"></v-list-item>
      </v-list>

      <template v-else>
        <v-list v-if="pageRoute.hasOwnProperty('childs')" nav>
          <v-list-group :value="pageRoute.value">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="pageRoute.value"
                :prepend-icon="pageRoute.icon"
                :active="$route.path.includes(pageRoute?.path || '')"
                @click="drawer = true"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="child in pageRoute.childs"
              :prepend-icon="child.icon"
              :title="child.value"
              :active="checkRoute(child.route)"
              :to="child.route"
            ></v-list-item>
          </v-list-group>
        </v-list>

        <v-list v-else nav>
          <v-list-item
            :title="pageRoute.value"
            :prepend-icon="pageRoute.icon"
            :active="checkRoute(pageRoute.route)"
            :to="pageRoute.route"
          ></v-list-item>
        </v-list>
      </template>
    </template>

    <v-divider></v-divider>
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-logout-variant"
        @click="signOut({ callbackUrl: '/auth/login' })"
        title="Logout"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar :elevation="1">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Nuxt biolerplate</v-toolbar-title>
  </v-app-bar>
</template>
