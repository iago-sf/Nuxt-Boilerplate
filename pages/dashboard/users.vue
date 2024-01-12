<script setup>
definePageMeta({
  title: "Usuarios",
  auth: true,
  layout: "dashboard",
})

const { endPoint, loading, itemsPerPageOptions, updateItems, tableData, loadItems, resetTable } =
  useTableServer()

const {
  showFormDialog,
  formDialogType,
  showDestroyDialog,
  showRestoreDialog,
  showDestroyPermanentDialog,
  item,
  openDialog,
} = useDialogs()

const headers = [
  { title: "ID", key: "id", align: "center" },
  { title: "Name", key: "name", align: "center" },
  { title: "Email", key: "email", align: "center" },
  {
    title: "Actions",
    key: "actions",
    align: "center",
    sortable: false,
    exportable: false,
  },
]

const modifiedRows = {}

endPoint.value = "/dashboard/users"
</script>

<template>
  <dashboard-users-form-dialog
    :show="showFormDialog"
    @closeDialog="showFormDialog = false"
    @reloadItems="loadItems()"
    v-model:type="formDialogType"
    :item="item"
    :endPoint="endPoint"
  />

  <destroy-dialog
    :show="showDestroyDialog"
    @closeDialog="showDestroyDialog = false"
    @reloadItems="loadItems()"
    :item="item"
    :endPoint="endPoint"
  />

  <restore-dialog
    :show="showRestoreDialog"
    @closeDialog="showRestoreDialog = false"
    @reloadItems="loadItems()"
    :item="item"
    :endPoint="endPoint"
  />

  <destroy-permanent-dialog
    :show="showDestroyPermanentDialog"
    @closeDialog="showDestroyPermanentDialog = false"
    @reloadItems="loadItems()"
    :item="item"
    :endPoint="endPoint"
  />

  <v-card elevation="6" class="ma-5" variant="outlined">
    <v-data-table-server
      multi-sort
      :loading="loading"
      :headers="headers"
      :items="tableData.items"
      :items-length="tableData.itemsLength"
      :items-per-page-options="itemsPerPageOptions"
      v-model:page="tableData.page"
      v-model:sort-by="tableData.sortBy"
      v-model:items-per-page="tableData.itemsPerPage"
      @update:options="loadItems()"
    >
      <template v-slot:top>
        <v-toolbar :class="{ 'bg-red-lighten-2': tableData.deleted }" flat>
          <v-toolbar-title>
            <span> Users </span>
          </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <template v-if="!tableData.deleted">
            <v-btn icon @click="resetTable">
              <v-icon>mdi-refresh</v-icon>
              <v-tooltip activator="parent">Reload table</v-tooltip>
            </v-btn>

            <v-btn icon @click="openDialog('create')">
              <v-icon>mdi-file-plus-outline</v-icon>
              <v-tooltip activator="parent">Create user</v-tooltip>
            </v-btn>
          </template>
          <v-btn :active="tableData.deleted" icon @click="tableData.deleted = !tableData.deleted">
            <v-icon>mdi-delete-variant</v-icon>
            <v-tooltip activator="parent">{{
              tableData.deleted ? "See actives" : "See deleted"
            }}</v-tooltip>
          </v-btn>
        </v-toolbar>
      </template>

      <template v-slot:thead>
        <tr>
          <td
            v-for="header in headers.filter((header) => header.key != 'actions')"
            :key="header.key"
          >
            <v-text-field
              v-model="tableData.search[header.key]"
              @input="updateItems"
              type="text"
              class="px-1"
              variant="underlined"
            ></v-text-field>
          </td>
        </tr>
      </template>

      <template v-for="(modifier, key) in modifiedRows" v-slot:[`item.${key}`]="{ item }">
        {{ modifier(item[key]) }}
      </template>

      <template v-slot:item.actions="{ item }">
        <div v-if="!tableData.deleted">
          <v-btn density="compact" variant="text" icon @click="openDialog('edit', item)">
            <v-icon>mdi-pencil</v-icon>
            <v-tooltip activator="parent">Edit</v-tooltip>
          </v-btn>
          <v-btn density="compact" variant="text" icon @click="openDialog('destroy', item)">
            <v-icon>mdi-delete</v-icon>
            <v-tooltip activator="parent">Delete</v-tooltip>
          </v-btn>
        </div>
        <div v-else>
          <v-btn density="compact" variant="text" icon @click="openDialog('restore', item)">
            <v-icon>mdi-restore</v-icon>
            <v-tooltip activator="parent"> Restore </v-tooltip>
          </v-btn>
          <v-btn
            density="compact"
            variant="text"
            icon
            @click="openDialog('destroyPermanent', item)"
          >
            <v-icon>mdi-delete-alert</v-icon>
            <v-tooltip activator="parent"> Delete permanently </v-tooltip>
          </v-btn>
        </div>
      </template>
    </v-data-table-server>
    <loading-overlay v-if="loading" />
  </v-card>
</template>
