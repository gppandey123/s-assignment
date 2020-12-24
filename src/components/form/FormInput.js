import React, { Component } from 'react';
import './FormInput.css';

import {getData} from '../../js/actions/index';
import {getfilterProduct} from '../../js/actions/index';
import { connect } from "react-redux";
 class FormInput extends Component {
     
    onsubmit = (event) => {
          event.preventDefault();
    }
    Change =(e) => {
      this.props.getfilterProduct(this.props.filteredItems ,e.target.value)
      setTimeout(() => {
        this.props.getData();
      }, 1500);
      
    }
    

    render() {
       console.log(this.props.searchTerm);
        return (
            <div className="container">
            <form onClick={this.onsubmit}>
               <input type="text"
                placeholder="naruto"
                value={this.props.searchTerm}
                onChange = {this.Change}/>
               <button>Go</button>
            </form> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      filteredItems: state.filteredItems,
      searchTerm : state.searchTerm
    }
  }

 

export default connect(mapStateToProps ,{getfilterProduct ,getData})(FormInput);
