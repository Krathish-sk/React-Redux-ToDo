import React from "react";
import TodoContainer from "./components/todo/TodoContainer";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col m-6 h-screen items-center bg-slate-200">
      <Header />
      <TodoContainer />
    </div>
  );
}
