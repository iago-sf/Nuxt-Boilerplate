<script setup lang="ts">
const { toast, message, color, showToast } = useToast()

provide("toast", toast)
provide("message", message)
provide("color", color)
provide("showToast", showToast)

useHead({
  title: process.env.APPNAME || "Nuxt boilerplate",
  meta: [
    {
      name: "author",
      content: process.env.AUTHOR || "Nuxt boilerplate",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
})

useSeoMeta({})
</script>

<template>
  <NuxtLayout>
    <v-snackbar v-model="toast" :color="color" :timeout="3000" location="bottom">
      {{ message }}
    </v-snackbar>
    <NuxtPage />
  </NuxtLayout>
</template>
