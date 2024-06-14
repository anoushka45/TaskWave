import React from 'react';
const About = () => {
  return (
    <div className='about-container min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-6'>
       <div className='bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-2xl animate-fade-in'>
      <h1 className='text-4xl font-extrabold mb-6 text-center'>About Us</h1>
      <p className='text-lg leading-relaxed'>
        TaskWave is a powerful task management platform designed to help individuals and teams organize their work efficiently. Whether you're managing personal tasks or collaborating with a team, TaskWave provides intuitive tools to track tasks, set deadlines, and achieve goals effectively.
        <br /><br />
        Our mission is to enhance productivity by simplifying task management processes. With TaskWave, you can stay focused, prioritize tasks, and streamline workflows effortlessly.
      </p>
    </div>
    </div>
  );
};

export default About;
