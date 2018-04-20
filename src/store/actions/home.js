import {getSliders} from '../../api/home'
import * as Types from '../action-types';
let actions = {
     counterAsyncAdd(type,count){
        //执行函数完毕等待2秒钟 执行dispatch进行派发 更新store中的state状态
        return  (dispatch)=>{
            setTimeout(()=>{
                dispatch({type:type,count:count});
            },2000)
        }
    },
    bannerAsyncInit(){
        //执行函数完毕等待2秒钟 执行dispatch进行派发 更新store中的state状态
        return async (dispatch)=>{
            //等待后端网络请求数据返回的data数据
            let data=await getSliders();

            if(data.length>0){
                console.log(data);
                dispatch({type:Types.GET_BANNER,sliders:data});
            }
        }
    }
};
export default actions;
