import React, { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "" }); // newBook will be an object with <title> key and <author> key

  const handleInputChange = (event) => {
    // if (event.target.name === "title") {
    //   setNewBook((prevState) => {
    //     prevState.title = event.target.value;
    //   });
    // } else {
    //   setNewBook((prevState) => {
    //     prevState.author = event.target.value;
    //   });
    // }
    setNewBook((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevState) => [...prevState, newBook]);
    setNewBook({ title: "", author: "" }); // empty newBook state
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(event) => handleInputChange(event)}
              value={newBook.title}
            />
          </div>
          <div>
            <label>Author: </label>
            <input
              type="text"
              name="author"
              id="author"
              onChange={(event) => handleInputChange(event)}
              value={newBook.author}
            />
          </div>
          <button onClick={(event) => handleSubmit(event)}>Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((obj, idx) => {
          return (
            <div className="bookCard" key={idx}>
              <p>{obj.title}</p>
              <p>{obj.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookshelf;
