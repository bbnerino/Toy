import {ADD_VIEW,REMOVE_VIEW} from './types'

export const addView = (number) =>{
  if (!number){number=10}
  return {
    type:ADD_VIEW,
    payload: Number(number)
  }
}
export const removeView = () =>{
  return {
    type:REMOVE_VIEW
  }
}
