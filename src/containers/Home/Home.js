import React from 'react';
import './index.less'
import actions from '../../store/actions/home'//引入异步的动作进来
import * as Types from '../../store/action-types'
import {connect} from 'react-redux';
 class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount(){
      //console.log(this.props.store);

  };
  componentWillMount(){
      this.props.initBanner();
  };
  render(){
    return <div className="home-list">
       <div> <button style={{height:40,width :100,background:'#f90'}}  onClick={this.props.increase}>异步加1</button></div>
        异步的数字:{this.props.asyncCount}
       <div> <button style={{height:40,width :100,background:'#f90'}} onClick={this.props.decrease}>异步减1</button></div>

      <div>  <button style={{height:40,width :100,background:'#f90'}}  onClick={this.props.increaseNow}>同步加1</button></div>
        同步的数字:{this.props.count}
        <div><button style={{height:40,width :100,background:'#f90'}} onClick={this.props.decreaseNow}>同步减1</button></div>
        <ul>
            {this.props.sliders.map((item,index)=>{
                return (
                    <li key={index}>
                       <img src={item} alt=""/>
                    </li>
                );
            })}
        </ul>
    </div>;
  }
}
const mapStateToProps=(state)=>{
     return {...state.home}
};
 const mapDispatchToProps=(dispatch)=>{
     return{
         //发送action是异步，异步执行完毕然后执行dispatch
         increase:()=>dispatch(actions.counterAsyncAdd(Types.ADD_ASYNC,1)),
         decrease:()=>dispatch(actions.counterAsyncAdd(Types.ADD_ASYNC,-1)),
         initBanner:()=>dispatch(actions.bannerAsyncInit()),
         //执行dispatch是直接提交同步状态
         increaseNow:()=>dispatch({type:Types.ADD_NOW,count:1}),
         decreaseNow:()=>dispatch({type:Types.ADD_NOW,count:-1})
     }
 }
export default connect(mapStateToProps,mapDispatchToProps)(Home);
