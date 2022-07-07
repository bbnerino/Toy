import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar(){
  const router = useRouter()

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname==="/"?"now":""}>HOME</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname==="/about"?"now":""}>ABOUT</a>
      </Link>
      <style>{`
        nav{
          background-color:skyblue;
        }
        a{
          text-decoration:none;
        }
        .now{
          color:red;
          font-weight :1000;
        }
      `}</style>
    </nav>
  )
}


