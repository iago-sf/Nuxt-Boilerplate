<script setup lang="ts">
const { toast, message, color, showToast } = useToast()

provide("toast", toast)
provide("message", message)
provide("color", color)
provide("showToast", showToast)

useHead({
  titleTemplate: (titleChunk: string | undefined) => {
    return titleChunk
      ? `${titleChunk} | ${process.env.APP_NAME || "Nuxt boilerplate"}`
      : process.env.APP_NAME || "Nuxt boilerplate"
  },

  meta: [
    {
      name: "author",
      content: process.env.AUTHOR || "Github: @ismaelcmajada & @iago-sf",
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
    <v-snackbar v-model="toast" :color="color" :timeout="5000" location="bottom">
      {{ message }}
    </v-snackbar>
    <NuxtPage />
  </NuxtLayout>
</template>
