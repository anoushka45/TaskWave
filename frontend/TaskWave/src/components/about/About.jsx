import React from 'react';
const About = () => {
  return (
    <div className='about-container min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-6'>
      <div className='bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-2xl'>
        <h1 className='text-4xl font-extrabold mb-6 text-center'>About Us</h1>
        <p className='text-lg leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, inventore? Maxime esse velit sapiente quis, eligendi blanditiis? Repudiandae provident omnis repellat dignissimos velit officia odio voluptates, architecto earum nemo nesciunt!
        </p>
      </div>
    </div>
  );
};

export default About;
