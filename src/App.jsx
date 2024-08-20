import React from "react";
import Heading from "./components/Heading";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import { useState, useReducer } from "react";
import WelcomMesg from "./components/WelcomMesg";
import { Todo_items_Store } from "./store/Todo_items_Store";

const TodoItemsReducer = () => {
  return [];
};

function App() {
  const [TodoItems, setTodoItems] = useState([]);
  const [NewTdodItems, dislatchTodoItems] = useReducer();
  const AddNewITems = (ItemsName, DueDate) => {
    setTodoItems((currval) => {
      const newTodoIems = [
        ...currval,
        { ItemsName: ItemsName, DueDate: DueDate },
      ];
      return newTodoIems;
    });
  };

  const DeleteTodoITems = (todoItemsName) => {
    const newTodoIems = TodoItems.filter(
      (Items) => Items.ItemsName !== todoItemsName
    );
    setTodoItems(newTodoIems);
  };
  return (
    <Todo_items_Store.Provider
      value={{
        TodoItems: TodoItems,
        AddNewITems: AddNewITems,
        DeleteTodoITems: DeleteTodoITems,
      }}
    >
      {" "}
      <div className="Todo-container text-center">
        <Heading />
        <div className="container">
          <AddTodo />
          <WelcomMesg />
          <Items />
        </div>
      </div>
    </Todo_items_Store.Provider>
  );
}

export default App;
