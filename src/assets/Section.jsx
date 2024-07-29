import React from 'react';

const Section = () => {
  return (
    <div className="flex flex-wrap justify-center items-center p-6 bg-gray-100 space-x-4">
      <div className="flex-1 min-w-[300px] p-4">
        <img src="path-to-your-image" alt="Decorative" className="rounded shadow-md" />
      </div>
      
      <div className="flex-1 min-w-[300px] p-4 bg-green-50 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-2">YOUR SPACE, YOUR STYLE</h2>
        <div className="flex items-center mb-4">
          <div className="flex -space-x-2">
            <img className="w-8 h-8 rounded-full border-2 border-white" src="path-to-avatar1" alt="Avatar 1" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="path-to-avatar2" alt="Avatar 2" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="path-to-avatar3" alt="Avatar 3" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="path-to-avatar4" alt="Avatar 4" />
          </div>
          <p className="ml-2 text-sm">677k Clients Globally</p>
        </div>
        <p className="mb-4">
          We excel in innovation and problem-solving, transforming challenges that get into boundless possibilities.
        </p>
      </div>
      
      <div className="flex-1 min-w-[300px] p-4 bg-gray-50 rounded shadow-md">
        <p className="text-lg mb-4">Ready to bring your vision to life?</p>
        <p className="text-2xl font-bold mb-4">+131 5610 7540</p>
      </div>
      
      <div className="flex-1 min-w-[300px] p-4 bg-pink-50 rounded shadow-md text-center">
        <p className="text-4xl font-bold mb-2">672K</p>
        <p className="text-sm">Accomplished Projects</p>
      </div>
      
      <div className="flex-1 min-w-[300px] p-4">
        <img src="path-to-sofa-image" alt="Sofa" className="rounded shadow-md" />
      </div>
    </div>
  );
};

export default Section;