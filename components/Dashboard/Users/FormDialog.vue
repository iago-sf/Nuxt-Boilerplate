<script setup>
import { computed, ref, watch } from "vue"
import { ruleRequired, ruleMaxLength, ruleEmail } from "@/utils/rules"

const props = defineProps(["show", "item", "type", "endPoint"])
const emit = defineEmits(["closeDialog", "reloadItems"])
const showToast = inject("showToast")

const loading = ref(false)

const dialogState = computed({
  get: () => props.show,
  set: () => {
    emit("closeDialog")
  },
})

const form = ref(false)
const formData = useForm({
  id: undefined,
  name: "",
  email: "",
  password: "",
})

watch(dialogState, (value) => {
  if (value) {
    loading.value = true

    if (props.type === "edit") {
      formData.id.value = props.item.id
      formData.name.value = props.item.name
      formData.email.value = props.item.email
      formData.password.value = ""
    } else if (props.type === "create") {
      formData.id.value = undefined
      formData.name.value = ""
      formData.email.value = ""
      formData.password.value = ""
    }
  } else {
    emit("reloadItems")
  }
})

const submit = () => {
  if (props.type === "edit") {
    formData.put(`${props.endPoint}/${props.item.id}`, {
      onSuccess: (val) => {
        if (val?.message) {
          showToast(val.message)
        }

        dialogState.value = false
      },
      onError: (val) => {
        if (val?.statusMessage) {
          showToast(val.statusMessage, "error")
        }
      },
    })
  } else if (props.type === "create") {
    formData.post(props.endPoint, {
      onSuccess: (val) => {
        if (val?.message) {
          showToast(val.message)
        }

        dialogState.value = false
      },
      onError: (val) => {
        if (val?.statusMessage) {
          showToast(val.statusMessage, "error")
        }
      },
    })
  }
}
</script>

<template>
  <v-dialog scrollable v-model="dialogState" width="1024">
    <v-card>
      <v-card-title class="mt-2">
        <span v-if="props.type == 'create'"> Create user </span>
        <span v-else> Edit user </span>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-container>
          <v-form v-model="form" @submit.prevent="submit">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Name*"
                  v-model="formData.name.value"
                  :rules="[ruleRequired, (v) => ruleMaxLength(v, 40)]"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  label="Email*"
                  v-model="formData.email.value"
                  :rules="[ruleRequired, ruleEmail, (v) => ruleMaxLength(v, 50)]"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  label="Password*"
                  v-model="formData.password.value"
                  type="password"
                  :rules="[ruleRequired, (v) => ruleMaxLength(v, 25)]"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="d-flex justify-center">
        <v-btn color="red-darken-1" variant="text" @click="dialogState = false"> Close </v-btn>
        <v-btn color="blue-darken-1" :disabled="!form" variant="text" @click="submit">
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
