// 一个页面一个reducer
import * as Types from '../action-types'
let initState = {
    count:0,
    asyncCount:0,
    sliders:[]
  };
function home(state=initState,action) {
  switch (action.type){
    case Types.ADD_NOW:
      return {...state,count:state.count+action.count};
      case Types.ADD_ASYNC:
      return {...state,asyncCount:state.asyncCount+action.count};
      case Types.GET_BANNER:
      return{...state,sliders:action.sliders};

  }
  return state;
}
export default home