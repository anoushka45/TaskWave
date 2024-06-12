import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text-gray-100 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center p-4">
        <h1 className="text-6xl font-bold mb-4">
          Organize your work and life, finally!
        </h1>
        <p className="text-lg">
          Become efficient, etc., and more such stuff.
        </p>
        <button className='bg-[#3955d4] text-white p-2 mt-2'>Make a To-do today</button>
      </div>
    </div>
  );
};

export default Home;
