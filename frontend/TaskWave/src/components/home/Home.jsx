import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center text-gray-100 p-8">
        <h1 className="text-6xl font-bold mb-4 leading-tight">
          Organize Your Work and Life, Finally!
        </h1>
        <p className="text-lg mb-6">
          Become efficient, manage tasks, and more.
        </p>
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300'>
          Make a To-do Today
        </button>
      </div>
    </div>
  );
};

export default Home;
