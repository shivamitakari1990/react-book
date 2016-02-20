import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions';
import {bindActionCreators} from 'redux';



//@connect(state => ({
//  books: state.books
//}))
 class BookList extends Component {

  renderList() {
    return this.props.allBooks.map((Book) => {
      return(
        <li className="list-group-item" onClick={() => {this.props.selectBook(Book)}}>{Book.title}</li>
      );
    });

  }
  render() {
    return (
      <div>
       <ul className="list-group">
       {this.renderList()}
       </ul>
      </div>
    );
  }
}

// Now connect to redux store to fetch the records
function mapStateToProps(state) {
  return {
    allBooks : state.books
  };
}



//Inject select book function into the BookList component.
function mapActionToProps(dispatch) {
  //both lines are some.
  //bindActionCreators({selectBook: selectBook}, dispatch);
  // first arg : actionCreators (Function or Object): An action creator, or an object whose values are action creators.
  //  dispatch (Function): A dispatch function available on the Store instance.
    return bindActionCreators({selectBook}, dispatch);
}


export default connect(mapStateToProps, mapActionToProps)(BookList)