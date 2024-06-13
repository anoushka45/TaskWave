import React, { useState } from "react";
import "./todo.css";
import TodoCard from "./TodoCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [tasks, setTasks] = useState([]);
  const [showTextarea, setShowTextarea] = useState(false);

  const show = () => {
    setShowTextarea(true);
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = () => {
    if (inputs.title.trim() === "") {
      alert("Please enter a title for the task.");
      return;
    }
    setTasks([...tasks, inputs]);
    setInputs({ title: "", body: "" });
    setShowTextarea(false);
    toast.success("your task is added!!");
    toast.error("Task not saved, please sign up!");
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleUpdate = (index) => {
    const taskToUpdate = tasks[index];
    setInputs(taskToUpdate);
    setShowTextarea(true);
    handleDelete(index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 ">
<ToastContainer/>

      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl m-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Add a Task
        </h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            onClick={show}
            onChange={change}
            name="title"
            value={inputs.title}
            placeholder="Title"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {showTextarea && (
            <textarea
              name="body"
              value={inputs.body}
              onChange={change}
              placeholder="Body"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <button
            onClick={submit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="todo-body mt-10 w-full max-w-5xl">
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((item, index) => (
            <TodoCard
              key={index}
              title={item.title}
              body={item.body}
              onDelete={() => handleDelete(index)}
              onUpdate={() => handleUpdate(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
