import React, { Component } from 'react';
import Home from './Home';
import SendData from './SendData';
class Union extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
         <Home size="col-6"/>
        </div>
        <div className="col-6">
         <SendData/>
        </div>
      </div>
    );
  }
}
export default Union;