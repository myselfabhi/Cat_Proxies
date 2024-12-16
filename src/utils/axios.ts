import axios from "axios"

const axiosInstance = axios.create({
  baseURL: `${process.env.HOST_API}`,
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
  }
)

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined" && window.localStorage) {
      const accessToken = window.localStorage.getItem("accessToken")
      if (accessToken) {
        if (config.headers)
          config.headers["Authorization"] = `Bearer ${accessToken}`
      }
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export default axiosInstance
