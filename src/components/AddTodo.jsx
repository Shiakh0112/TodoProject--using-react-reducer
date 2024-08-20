import React from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { useState, useRef } from "react";

import { useContext } from "react";
import { Todo_items_Store } from "../store/Todo_items_Store";
function AddTodo() {
  const TodoItemsName = useRef();
  const TodoDudate = useRef();
  const TodoItemsObject = useContext(Todo_items_Store);
  const NewTodoItems = TodoItemsObject.AddNewITems;
  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const todoName = TodoItemsName.current.value;
    const dueDate = TodoDudate.current.value;
    TodoItemsName.current.value = "";
    TodoDudate.current.value = "";
    NewTodoItems(todoName, dueDate);
  };
  return (
    <>
      <form
        onSubmit={handleAddButtonClicked}
        className="row justify-content-center"
      >
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Todo Here"
              ref={TodoItemsName}
            />
            <input type="date" className="form-control" ref={TodoDudate} />
            <button type="submit" className="btn btn-success">
              <IoMdPersonAdd />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
