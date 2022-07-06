import Gugudan from "./pages/Gugudan"
import WordGame from "./pages/WordGame"
import Baseball from "./pages/Baseball"
import UserCheck from "./pages/UserCheck"
import Rock from "./pages/Rock"
import Users from "./pages/Users"
import User from './pages/User'
import Transition from "./pages/Transition"

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path:'/',
    component:Gugudan,
    name:'구구단',
  },
  {
    path:'/wordgame',
    component:WordGame,
    name:'쿵쿵따'
  },
  {
    path:'/baseball',
    component:Baseball,
    name:'야구게임'
  },
  {
    path:'/usercheck',
    component:UserCheck,
    name:'내 정보'
  },
  {
    path:'/rock',
    component:Rock,
    name:'가위바위보'
  },
  {
    path:'/users',
    component:Users,
    name:'유저들 정보'
  },
  {
    path:'/users/:id',
    component:User,
  },
  {
    path:'/transition',
    component:Transition
  }

]


