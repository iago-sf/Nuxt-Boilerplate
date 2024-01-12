<script setup lang="ts"></script>

<template>
  <div class="mt-5">
    <hr class="mx-auto w-75 bg-green-600 border border-green-600" />

    <v-row class="py-5 w-75 mx-auto align-center">
      <v-col cols="12" md="6" class="none:text-center md:text-left px-0">
        <v-btn icon href="https://github.com/ismaelcmajada" target="_blank" color="green">
          <v-icon>mdi-github</v-icon>
        </v-btn>

        <v-btn icon href="https://github.com/iago-sf/Nuxt-Boilerplate" target="_blank" class="mx-5">
          <v-icon>mdi-github</v-icon>
        </v-btn>

        <v-btn icon href="https://linkedin.com/in/iago-sf" target="_blank">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" md="6" class="none:text-center md:text-right px-0">
        <v-btn variant="text" append-icon="mdi-arrow-right" to="/contact" nuxt> Contact us </v-btn>
      </v-col>
    </v-row>
  </div>

  <footer class="bg-stone-600 py-4">
    <v-row class="align-center justify-between w-75 ma-auto">
      <v-col cols="12" md="6" class="none:text-center md:text-left px-0">
        <span class="text-white">&copy; {{ new Date().getFullYear() }} Copyright</span>
      </v-col>

      <v-col cols="12" md="6" class="none:text-center md:text-right px-0">
        <a
          href="https://github.com/iago-sf/Nuxt-Boilerplate"
          class="text-white group transition duration-500 block w-fit none:m-auto md:ml-auto md:mr-0"
        >
          License
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
          ></span>
        </a>
      </v-col>
    </v-row>
  </footer>
</template>
