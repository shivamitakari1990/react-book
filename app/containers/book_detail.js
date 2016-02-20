/**
 * Created by mitakars on 2/19/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';


@creatable
export default class BookDetails extends Component {

  render() {
    console.log(this.props);
    if (!this.props.Activebook) {
      return <div> please select book</div>
    }
    return (
        <div>{this.props.Activebook.title}</div>
    );
  }
}


function creatable() {
  return Create => {
    @connect(state=>({Activebook : state.ActiveBook}))
   class MyDecorator extends Component {
     render() {
       console.log('>>>>>>>>>>>>>');
    console.log(this.props);
       console.log('>>>>>>>>>>>>>');
       return (
         <div>
           <Create
              {...this.props}
           />
         </div>
       )
     }

   }
    return MyDecorator;
  }
}
