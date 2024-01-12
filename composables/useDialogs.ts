import { ref } from "vue"

export default function useDialogs() {
  const showFormDialog = ref(false)
  const formDialogType = ref("")

  const showDestroyDialog = ref(false)
  const showRestoreDialog = ref(false)
  const showDestroyPermanentDialog = ref(false)
  const showFormControlHorarioDialog = ref(false)
  const showFormExportExcelDialog = ref(false)
  const showSignupDialog = ref(false)
  const showFilterDialog = ref(false)
  const showGenericDialog = ref(false)

  const item = ref({})

  const openDialog = (dialogType: string, newItem?: object | null) => {
    if (newItem) {
      item.value = newItem
    }
    switch (dialogType) {
      case "create":
        formDialogType.value = "create"
        showFormDialog.value = true
        break
      case "edit":
        formDialogType.value = "edit"
        showFormDialog.value = true
        break
      case "destroy":
        showDestroyDialog.value = true
        break
      case "restore":
        showRestoreDialog.value = true
        break
      case "destroyPermanent":
        showDestroyPermanentDialog.value = true
        break
      case "formControlHorario":
        showFormControlHorarioDialog.value = true
        break
      case "signup":
        showSignupDialog.value = true
        break
      case "filter":
        showFilterDialog.value = true
        break
      case "generic":
        showGenericDialog.value = true
        break
      case "exportExcel":
        showFormExportExcelDialog.value = true
        break
    }
  }

  return {
    showFormDialog,
    formDialogType,
    showDestroyDialog,
    showRestoreDialog,
    showDestroyPermanentDialog,
    showFormControlHorarioDialog,
    showFormExportExcelDialog,
    showSignupDialog,
    showFilterDialog,
    showGenericDialog,
    item,
    openDialog,
  }
}
