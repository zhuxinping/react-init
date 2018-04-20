import React from 'react';
import './index.less';
import {withRouter} from 'react-router-dom';
@withRouter
export default class MHeader extends React.Component {
  back = () =>{
    this.props.history.goBack();
  };
  render(){
    return <div className="m-header">
      <i className="iconfont icon-fanhui" onClick={this.back}></i>
      {this.props.children}
    </div>
  }
}


