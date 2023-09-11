import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete, MdFileDownloadDone, MdEditSquare } from "react-icons/md";
import {
  removeTodo,
  updateTodo,
  markTodo,
} from "../../features/todo/todoSlice";

export default function Todos() {
  const { todos: todoList } = useSelector((state) => state);
  const [editText, setEditText] = useState("");
  const [currentEdit, setCurrentEdit] = useState("");
  const dispatch = useDispatch();

  function showEditField(id) {
    setCurrentEdit(id);
  }

  function updateTodoHandler(id, text) {
    if (text === "") {
      alert("Todo cannot be empty");

      return;
    }
    const payload = {
      id,
      text,
    };
    setEditText("");
    setCurrentEdit("");
    dispatch(updateTodo(payload));
  }

  let todos = [...todoList].reverse();

  const data = todos.map((todo) => {
    let isDone = todo.isDone;
    return (
      <div className="flex justify-center items-center gap-3 " key={todo.id}>
        <li
          className={`mt-4 w-full flex justify-between items-center border-2  px-4 py-2 rounded hover:border-amber-500 ${
            isDone
              ? "bg-zinc-500 text-black"
              : "bg-zinc-800 hover:bg-zinc-700 text-white"
          } `}
        >
          {currentEdit === todo.id ? (
            <div className="w-full flex justify-between gap-2 ">
              <input
                className="bg-zinc-800  w-full border border-gray-700 focus:border-amber-500 outline-none pl-4 hover:bg-zinc-500"
                autoFocus
                required
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <MdFileDownloadDone
                className="text-green-300 text-3xl cursor-pointer hover:text-green-500 transition duration-200"
                onClick={() => updateTodoHandler(todo.id, editText)}
              />
            </div>
          ) : (
            <>
              <div
                className={` w-full text-ellipsis overflow-hidden ${
                  !isDone && "hover:cursor-pointer"
                }`}
              >
                {todo.text}
              </div>
              <div className="flex justify-center items-center gap-4">
                {!isDone && (
                  <MdEditSquare
                    className="text-amber-500 text-xl cursor-pointer"
                    onClick={() => showEditField(todo.id)}
                  />
                )}
                <MdDelete
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-red-600 text-xl cursor-pointer"
                />
              </div>
            </>
          )}
        </li>
        <div>
          {currentEdit === "" && !isDone && (
            <MdFileDownloadDone
              onClick={() => dispatch(markTodo(todo.id))}
              className="items-center justify-center text-4xl text-green-500 mt-4 cursor-pointer hover:text-green-700 transition duration-200"
            />
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="w-4/5 justify-center items-center overflow-auto">
      <h2 className="text-center font-semibold text-xl underline underline-offset-4">
        Todos
      </h2>
      {todos.length > 0 ? (
        <div>{data}</div>
      ) : (
        <strong className="flex justify-center text-center p-4">
          No Todos Yet
        </strong>
      )}
    </div>
  );
}
