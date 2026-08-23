import { useTodo } from "./Contexts/todo";
import { useState } from "react";


function App() {

    const { todo, insertTodo, removeTodo } = useTodo();

    const [newTodo, setTodo] = useState("");
    
    

    const handleAdd = () => {
        if (newTodo.trim() === "") return;

        insertTodo(newTodo);
        setTodo("");
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-blue-100">
            <h1 className="text-black text-3xl font-bold mb-4">TODO APP</h1>
            
<div className="bg-white rounded-2xl shadow-lg p-6">
    
    <div className="flex gap-3 items-stretch">

        <textarea
            value={newTodo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a new todo..."
            className="flex-1 h-32 resize-none border border-slate-300 rounded-xl p-4 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold px-6 rounded-xl transition duration-200"
        >
            Add
        </button>

    </div>

</div>

            <ul className="mt-4 bg-white p-4 shadow-md rounded-xl w-64">
                {todo.map((list) => (
                    <li key={list.id}>
                        {list.todo}

                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-1  rounded ml-2 gap-4"
                            onClick={() => removeTodo(list)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            </div>
       
    );
}

export default App;