import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const TodoCard = ({ title, body, onDelete, onUpdate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700 leading-relaxed break-words">{body}</p>
      </div>
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
        <div className="flex space-x-2">
          <button onClick={onUpdate} className="text-blue-500 hover:text-blue-700">
            <FaEdit size={20} />
          </button>
          <button onClick={onDelete} className="text-red-500 hover:text-red-700">
            <FaTrashAlt size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
