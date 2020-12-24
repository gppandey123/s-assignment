import React, { Component } from 'react';
import './SingleCard.css';
 class SingleCard extends Component {
    render() {
        return (
            <div className="card" style ={{width:"8rem"}}>
              <img src={this.props.item.image_url}
               className="card-img-top img" alt="top img"/>
               <div className="card-footer  foot">
                     {this.props.item.title}
                </div> 
            </div>
        )
    }
}

export default SingleCard;
