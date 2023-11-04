import React from 'react';

const Button = ({ name }) => {
  return (
    <div className="flex flex-none">
      <button className="px-3 py-1 text-base font-semibold m-3 ml-0 bg-gray-100 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
