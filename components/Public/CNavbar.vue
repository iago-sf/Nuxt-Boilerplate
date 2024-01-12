<script setup></script>

<template>
  <nav>
    <v-row class="py-2 px-[12.5%] align-center justify-between">
      <v-col cols="12" md="6">
        <img
          src="https://rock-the-prototype.com/wp-content/uploads/2022/01/Nuxt_JavaScript_Framework.jpg"
          alt="Nuxt logo"
          width="200"
        />
      </v-col>
      <v-col cols="12" md="6" class="none:text-center md:text-right">
        <button
          class="hover:border-2 hover:border-green-600 none:bg-green-600 none:text-white py-3 px-5 rounded shadow-md hover:bg-white hover:text-green-600 transition-all duration-500"
          @click="navigateTo('/auth/login')"
        >
          Login
        </button>
      </v-col>
    </v-row>

    <hr class="mx-auto w-75 bg-green-600 border border-green-600" />
  </nav>
</template>
