import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Learn Redux Toolkit
        </h1>

        <AddTodo />

        <Todo />
      </div>
    </div>
  );
}

export default App;