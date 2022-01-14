import {REMOVE_SUBSCRIBER,ADD_SUBSCRIBER} from './types'

export const addSubscriber = ()=>{
  return {
    type: ADD_SUBSCRIBER,
  }
}
export const removeSubscriber = ()=>{
  return {
    type:REMOVE_SUBSCRIBER
  }
}