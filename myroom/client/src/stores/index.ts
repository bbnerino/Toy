import { enableMapSet } from 'immer'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserStore'
import computerReducer from './ComputerStore'
import whiteboardReducer from './WhiteboardStore'
import chatReducer from './ChatStore'
import roomReducer from './RoomStore'

enableMapSet()
//  불변 버전의 Map을 지원합니다.
// store의 모든 값들을 합쳐주기 
// user, chat,room 세개만 사용할 예정

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    room: roomReducer,
    computer: computerReducer,
    whiteboard: whiteboardReducer,
  },
  middleware: (getDefaultMiddleware) => 
  // 클라이언트에게 요청이 오고 그 요청을 보내기 위해 응답하려는 중간(미들)에 목적에 맞게 처리를 하는, 
  // 말하자면 거쳐가는 함수들
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// rootstate의 값과 
export type RootState = ReturnType<typeof store.getState>
// 함수들 
export type AppDispatch = typeof store.dispatch

export default store
