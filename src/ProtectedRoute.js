import React from 'react';
import {toValidate} from './api/session';
import {withRouter} from 'react-router-dom';
@withRouter
export default class ProtectedRoute extends React.Component {
  async componentDidMount(){ // 页面路径为/lesson时会调用此组件
    let {user} = await toValidate(); //发送ajax请求验证是否登录
    if(!user){ //如果没登录跳转登录页
      this.props.history.push('/login');
    }
  }
  render(){ // 默认正常渲染lesson页面
    let C =  this.props.component;
    return <C/>
  }
}
