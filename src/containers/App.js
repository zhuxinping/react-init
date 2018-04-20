import React from 'react';
import '../common/reset.less'
export default class App extends React.Component {
  render(){
    return <div>
      {this.props.children}
    </div>
  }
}
