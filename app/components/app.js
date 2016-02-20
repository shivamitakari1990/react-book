
import React from 'react';
import { Component } from 'react';
import Booklist from '../containers/book_list';
import BookDetails from '../containers/book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <Booklist/>
        <BookDetails/>
      </div>
    );
  }
}

