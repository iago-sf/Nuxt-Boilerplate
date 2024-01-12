<script setup lang="ts">
import { computed } from "vue"

const props = defineProps(["show", "elementName", "item", "items", "endPoint"])
const emit = defineEmits(["closeDialog", "reloadItems"])
const showToast: any = inject("showToast")

const dialogState = computed({
  get: () => props.show,
  set: () => {
    emit("closeDialog")
  },
})

const submit = async () => {
  if (!props.items && !props.item) {
    dialogState.value = false
    return
  }

  try {
    let url: string = ""
    let pack: Record<string, any> = {}

    if (props.items && props.items.length > 0) {
      url = `${props.endPoint}/restore-many`
      pack = {
        baseURL: "/api",
        method: "POST",
        body: JSON.stringify(props.items),
      }
    } else if (props.item.id) {
      url = `${props.endPoint}/${props.item.id}/restore`
      pack = {
        baseURL: "/api",
        method: "PUT",
      }
    }

    if (url === "" || pack?.baseURL === "") {
      dialogState.value = false
      return
    }

    const { data, error } = await useFetch(url, pack)

    if (error.value) {
      showToast(error.value.statusMessage, "error")
      return
    }

    //@ts-ignore
    showToast(data?.value?.message)

    emit("reloadItems")
    dialogState.value = false
  } catch (error) {
    throw error
  }
}
</script>

<template>
  <v-dialog scrollable v-model="dialogState" width="auto">
    <v-card>
      <v-card-title>
        <span class="text-h5">
          Restaurar
          {{ props.items && props.items.length > 0 ? "elementos" : "elemento" }}
        </span>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-container v-if="props.items && props.items.length > 0">
          ¿Seguro que desea restaurar los elementos?
          <v-list v-if="props.elementName">
            <v-list-item
              v-for="item in props.items"
              :key="item.id"
              :title="item[props.elementName]"
            >
              <template v-slot:prepend>
                <v-icon icon="mdi-menu-right"></v-icon>
              </template>
            </v-list-item>
          </v-list>
        </v-container>
        <v-container v-else>
          ¿Seguro que desea restaurar el elemento?
          <v-list v-if="props.elementName">
            <v-list-item :key="props.item.id" :title="props.item[props.elementName]">
              <template v-slot:prepend>
                <v-icon icon="mdi-menu-right"></v-icon>
              </template>
            </v-list-item>
          </v-list>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="d-flex justify-center">
        <v-btn color="red-darken-1" variant="text" @click="dialogState = false"> Cerrar </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="submit"> Restaurar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
