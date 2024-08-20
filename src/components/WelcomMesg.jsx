import React from "react";
import { useContext } from "react";
import { Todo_items_Store } from "../store/Todo_items_Store";

function WelcomMesg() {
  const { TodoItems } = useContext(Todo_items_Store);
  return <div>{TodoItems.length === 0 && <p>enjoy your day</p>}</div>;
}

export default WelcomMesg;
