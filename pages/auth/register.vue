<script setup lang="ts">
import { ruleRequired, ruleEmail } from "@/utils/rules"

const showToast: any = inject("showToast")

definePageMeta({
  layout: "auth",
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/dashboard",
  },
})

const username = ref("")
const email = ref("")
const password = ref("")

const form = ref(false)

const register = async () => {
  const { data, error } = await useFetch(`/api/auth/register`, {
    method: "POST",
    body: {
      name: username.value,
      email: email.value,
      password: password.value,
    },
  })

  if (error.value) {
    showToast(error.value.statusMessage, "error")
    return
  }

  showToast(data?.value?.message)
  await navigateTo("/auth/login")
}
</script>

<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        title="Create new account"
        theme="customDark"
        v-bind="props"
        :elevation="isHovering ? 24 : 6"
        rounded="xl"
        width="400"
        class="mx-auto pa-10"
      >
        <v-form v-model="form" @submit.prevent="register">
          <v-text-field v-model="username" label="Username" :rules="[ruleRequired]"></v-text-field>

          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            :rules="[ruleRequired, ruleEmail]"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            :rules="[ruleRequired]"
          ></v-text-field>

          <v-btn :disabled="!form" type="submit" color="primary" block class="mt-2">Sign up</v-btn>
        </v-form>
        <v-btn color="primary" block class="mt-2" to="/auth/login" nuxt>Sign in</v-btn>
      </v-card>
    </v-hover>
  </div>
</template>
