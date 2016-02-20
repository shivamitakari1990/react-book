
// This is action creator..

export function selectBook(book) {
  console.log("a book is selected" + book.title);
  return {
    type: 'BOOK_SELECTED',
    payload : book
  };
}
