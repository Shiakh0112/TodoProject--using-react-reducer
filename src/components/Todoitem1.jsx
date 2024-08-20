import React from "react";
import { MdDelete } from "react-icons/md";

import { useContext } from "react";
import { Todo_items_Store } from "../store/Todo_items_Store";
function Todoitem1({ TodoName, TodoDate }) {
  const { DeleteTodoITems } = useContext(Todo_items_Store);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {" "}
          {/* Adjust the column size according to your layout */}
          <div className="table-responsive">
            {" "}
            {/* Make the table responsive */}
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td style={{ minWidth: "150px" }}>{TodoName}</td>{" "}
                  {/* Set a minimum width for the TodoName column */}
                  <td style={{ minWidth: "150px" }}>{TodoDate}</td>
                  <td style={{ width: "30%" }}>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => DeleteTodoITems(TodoName)}
                    >
                      {/* Added btn-sm for smaller button size */}
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoitem1;
