import axios from "@/utils/axios"

export async function generateMetadata() {
  try {
    const res = await axios.get(`landing/data`)
    const data = res.data
    const title = data.payload.data.title
    const description = data.payload.data.description
    const meta_description = data.payload.data.meta_description

    return { title, description, meta_description }
  } catch (error: any) {
    console.error(
      "Error fetching metadata:",
      error.response ? error.response.data : error.message
    )
    return { title: "", description: "", meta_description: "" }
  }
}
