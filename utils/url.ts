export function formatUrl(url: string) {
  if (!/^https?:\/\//i.test(url)) {
    return "http://" + url
  }
  return url
}

export const getUrlParam = (param: any) => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param)
}
