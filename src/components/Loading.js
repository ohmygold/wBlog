import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class Loading extends Component {

 
  
  
  componentWillMount() {
    
  }
  
  render() {

    console.log('hello');
    return (
      <div style={{textAlign:'center'}}>
       <RefreshIndicator
      size={50}
      left={0}
      top={30}
      loadingColor="#FF9800"
      status="loading"
      style={{ display: 'inline-block',
    position: 'relative' 
    }}
    
    />
      </div>
    );
  }
}

export default Loading;