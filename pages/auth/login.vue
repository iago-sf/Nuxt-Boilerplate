<script setup lang="ts">
import { ruleRequired, ruleEmail } from "@/utils/rules"

const { signIn } = useAuth()
const showToast: any = inject("showToast")

definePageMeta({
  layout: "auth",
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/dashboard",
  },
})

const email = ref("")
const password = ref("")

const form = ref(false)

const login = async (email: string, password: string) => {
  const response = await signIn("credentials", { redirect: false, email, password })

  if (response?.error) {
    showToast(response.error, "error")
    return
  }

  await navigateTo(useRelativeCallbackUrl(useRoute()).value)
}
</script>

<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        title="Login"
        theme="customDark"
        v-bind="props"
        :elevation="isHovering ? 24 : 6"
        rounded="xl"
        width="400"
        class="mx-auto pa-10"
      >
        <v-form v-model="form" @submit.prevent="login(email, password)">
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

          <v-btn :disabled="!form" type="submit" color="primary" block class="mt-2">
            Sign in
          </v-btn>
        </v-form>

        <v-divider></v-divider>
        <v-btn block class="mt-2 ma-auto" color="primary" to="/auth/register" nuxt> Sign up </v-btn>
        <v-btn variant="text" block class="mt-2 ma-auto" to="/" nuxt> Go back </v-btn>
      </v-card>
    </v-hover>
  </div>
</template>
