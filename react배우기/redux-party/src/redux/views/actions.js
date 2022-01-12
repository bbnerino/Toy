import {ADD_VIEW,REMOVE_VIEW} from './types'

export const addView = () =>{
  return {
    type:ADD_VIEW
  }
}
export const removeView = () =>{
  return {
    type:REMOVE_VIEW
  }
}