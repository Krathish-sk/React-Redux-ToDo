import AddTodo from "./AddTodo";
import Todos from "./Todos";

export default function TodoContainer() {
  return (
    <div className="bg-slate-300 w-full h-4/5 pt-12 gap-8 rounded-md flex flex-col justify-start items-center">
      <AddTodo />
      <Todos />
    </div>
  );
}
