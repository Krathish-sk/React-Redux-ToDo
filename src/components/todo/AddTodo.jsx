import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    if (input) {
      dispatch(addTodo(input));
      setInput("");
    } else {
      return;
    }
  }

  return (
    <form
      className="space-x-3 flex w-full  justify-center items-center "
      onSubmit={submitHandler}
    >
      <input
        type="text"
        required
        className="bg-gray-800 rounded md:w-2/4 sm:w-2/3 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white sm:h-10 w-24 h-10 flex items-center bg-[#4285F4] border-0 py-1 px-4 sm:p-2 focus:outline-none hover:bg-blue-600 duration-200 rounded sm:text-lg text-sm"
      >
        Add Todo
      </button>
    </form>
  );
}
