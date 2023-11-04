import React from 'react';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img
        className="h-8 mr-3"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZYorkKac9Q0WNiMbJDj5jzFEgtSpc3eNixWoLWrvVh5cVTdNcn1Y2ZDxX0SHvLwTdCI&usqp=CAU"
      />
      <span className="font-semibold mr-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
