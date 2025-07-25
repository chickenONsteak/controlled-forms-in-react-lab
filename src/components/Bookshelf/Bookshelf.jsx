import React, { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState("");
  const [newBook, setNewBook] = useState(""); // newBook will be an object with <title> key and <author> key

  const handleInputChange = (event) => {
    setNewBook({ title: event.target.value, author: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevState) => [...prevState, newBook]);
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
              onChange={(event) => handleInputChange(event)}
              value={newBook}
            />
          </div>
        </form>
      </div>
      <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
  );
};

export default Bookshelf;
