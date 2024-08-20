import React from "react";

import { useContext } from "react";
import { Todo_items_Store } from "../store/Todo_items_Store";
import Todoitem1 from "./Todoitem1";

function Items() {
  // console.log(TodoITemsFormContext);
  const { TodoItems,  } = useContext(Todo_items_Store);
  return (
    <div>
      {TodoItems.map((Item, index) => (
        <Todoitem1
          TodoName={Item.ItemsName}
          TodoDate={Item.DueDate}
          key={index}
          
        />
      ))}
    </div>
  );
}

export default Items;
