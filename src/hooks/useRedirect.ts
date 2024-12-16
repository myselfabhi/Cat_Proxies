import { useRouter } from "next/navigation"

export default function useRedirect() {
  const router = useRouter()
  const redirectTo = (to: string) => {
    router.push(to)
  }
  return { redirectTo }
}
