import { NextComponentType } from "next"
import { AppContext, AppInitialProps, AppProps } from "next/app"
import NavBar from "../components/NavBar"


const App:NextComponentType<AppContext,AppInitialProps,AppProps> = ({Component,pageProps}) => {
  return (
    <div>
      <NavBar/>
      <Component {...pageProps}/>
    </div>
  )
}

export default App