import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
   <>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="text-center text-gray-500 p-8 bg-white bg-opacity-80 rounded-lg shadow-2xl m-20 animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-red-500">
          Organize Your Work and Life, Finally!
        </h1>
        <TypeAnimation
          sequence={[
            'Effortlessly track your tasks.',
            1000,
            'Stay on top of deadlines.',
            1000,
            'Collaborate with your team seamlessly.',
            1000,
            'Achieve your goals with TaskWave.',
            1000
          ]}
          wrapper="span"
          speed={60}
          style={{ fontSize: '2em',  display: 'inline-block' }}
          repeat={Infinity}
        />
        <p className="text-lg text-gray-800 mt-2 mb-8">
          Take control of your day with our powerful organizational tools. 
          Become more efficient, manage your tasks with ease, and never miss a deadline again. 
          Whether it's for work or personal life, our platform helps you stay on top of your responsibilities, 
          prioritize your goals, and achieve more. Experience the productivity boost you've been looking for and transform the way you work and live.
        </p>
        <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          Make a To-do Today
        </button>
      </div>
    </div>

   
   </>
  );
};

export default Home;
