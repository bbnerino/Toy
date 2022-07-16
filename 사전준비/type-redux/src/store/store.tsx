import {createStore} from 'redux'
import {Provider,useSelector,useDispatch, connect} from 'react-redux'
const reducer = (currentState:any,action:any)=>{
  if (currentState === undefined){
    return {
      number:1,
    }
  }
  const newState = {...currentState}
  if (action.type ==='PLUS'){
        newState.number = newState.number+Number(action.value);
  }
  return newState
}

export const store = createStore(reducer);