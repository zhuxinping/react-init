import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
// 配置路由的组件

import App from "./containers/App";
// 组件分为容器组件和基础组件
import {Provider} from 'react-redux';
import store from './store';
//import syncComponent from './SyncComponent'
//let Home = syncComponent(()=>import("./containers/Home/Home"));
import Home from './containers/Home/Home'
//console.log(store)
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch> {/*匹配path 匹配后渲染 并且不再继续渲染*/}
          <Route path="/" exact={true} component={Home}/>
        </Switch>
      </App>
    </Router>
  </Provider>,window.root);
