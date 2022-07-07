import { useRouter } from "next/router"

const detail = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>{router.query.title}</h1>
    </div>
  )
}

export default detail