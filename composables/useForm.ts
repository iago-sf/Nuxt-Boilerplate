import { ref } from "vue"

type ResponseOptions = {
  onSuccess?: (response: any) => void
  onError?: (error: any) => void
}

const reservedWords = ["get", "post", "put", "delete"]

export const useForm = (data: Record<string, any>) => {
  const formObject: Record<string, any> = {}

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (reservedWords.includes(key)) {
        throw new Error(`The property name ${key} is reserved and cannot be used.`)
      }

      formObject[key] = ref(data[key])
    }
  }

  const cleanData = () => {
    const data: Record<string, any> = {}

    for (const key in formObject) {
      if (formObject.hasOwnProperty(key) && formObject[key].value) {
        data[key] = formObject[key].value
      }
    }

    return data
  }

  const post = async (url: string, options?: ResponseOptions) => {
    try {
      const { data, error } = await useFetch(`${url}/store`, {
        baseURL: "/api",
        method: "POST",
        body: JSON.stringify(cleanData()),
      })

      if (data.value && options?.onSuccess) {
        options.onSuccess(data.value)
      }

      if (error.value && options?.onError) {
        options.onError(error.value)
      }
    } catch (error) {
      if (options?.onError) options.onError(error)
      throw error
    }
  }

  const put = async (url: string, options?: ResponseOptions) => {
    try {
      const { data, error } = await useFetch(`${url}/update`, {
        baseURL: "/api",
        method: "PUT",
        body: JSON.stringify(cleanData()),
      })

      if (data.value && options?.onSuccess) {
        options.onSuccess(data.value)
      }

      if (error.value && options?.onError) {
        options.onError(error.value)
      }
    } catch (error) {
      if (options?.onError) options.onError(error)
      throw error
    }
  }

  return { ...formObject, post, put }
}
