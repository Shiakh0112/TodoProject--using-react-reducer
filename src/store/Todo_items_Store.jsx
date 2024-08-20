import React from "react";
import { createContext } from "react";
export const Todo_items_Store = createContext({
  TodoItems: [],
  AddNewITems: () => {},
  DeleteTodoITems: () => {},
});
