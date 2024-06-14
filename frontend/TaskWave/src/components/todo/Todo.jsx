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
    toast.success("Your task is added!!");
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <ToastContainer />
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-3xl m-4 animate-fade-in">
        <h2 className="text-4xl flex items-center justify-center font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-red-500">
          Add a Task
        </h2>
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            onClick={show}
            onChange={change}
            name="title"
            value={inputs.title}
            placeholder="Title"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {showTextarea && (
            <textarea
              name="body"
              value={inputs.body}
              onChange={change}
              placeholder="Body"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          )}
          <button
            onClick={submit}
            className="mt-6 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 "
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="todo-body mt-12 w-full max-w-5xl">
        <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
