import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';

class Card extends Component {
  render() {
     console.log(this.props.data)
    return (
        <div>
        {this
          .props
          .data
         .map((item) => <Paper zDepth={2} style={{margin: '0 auto', marginBottom: '20px', maxWidth:'700px'}}
            key={Math.random()} >
            <div> 
            <Link to={`/post/${item.url}`}>
             <img style={{overflow:'blank', height:'200px',width:'100%',padding:'10px'}} src={item.img} alt="img"/>
            </Link>  
            </div>
            <div style={{
              padding: '10px 16px'
            }}>
              <h3>{item.title}</h3>
              <p style={{
                color: '#999'
              }}>{item.desc}</p>
            </div>
           </Paper>)}
     </div>

    );
  }
}

export default Card;