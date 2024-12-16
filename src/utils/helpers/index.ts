export const convertURLSearchParamsToObject = (
  searchParams: URLSearchParams
) => {
  let obj: any = {}
  searchParams.forEach((value: any, key: any) => {
    obj[key] = value
  })
  return obj
}

export const makeId = (length: number) => {
  var result = ""
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var charactersLength = characters.length
  for (var i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  return result
}
