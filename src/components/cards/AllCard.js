import React, { Component } from 'react';
import './AllCard.css';
import { connect } from "react-redux";
import {getData} from '../../js/actions/index';
import SingleCard from './SingleCard';

 class AllCard extends Component {
    
     state = {
        limit :8
     }

     onLoadMore = () => {
         this.setState({limit : this.state.limit+5})
     }
     
    componentDidMount() {
      
         this.props.getData();
    }

    render() {
        console.log(this.props.ctr);
          const {limit} = this.state;
         let card ;
          if(this.props.ctr.length >0){
            
              card = this.props.ctr.slice(0,limit).map(item =>{
                  return ( <div key={item.mal_id} className="bg-priary m-2">
                      <SingleCard  item={item}/>
                  </div>)
              })
            
          }
          else{
              card = <p>Loading...</p>
          }

        return (
            <div id="item"> 
               <div className="d-flex mx-3 flex-wrap A">
                 {card}
               </div>

                <div className="d-flex justify-content-center">
               <button type="button" className="btn btn-primary btn-lg text-align center"
                  onClick={this.onLoadMore}>load more</button>  
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
      ctr :state.filteredItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getData : () => dispatch(getData()),
      
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(AllCard);
