import React from 'react';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 w-full h-full">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />

        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 rounded-s-2xl p-2"
          placeholder="Search"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-e-2xl bg-gray-100">
          🔍
        </button>
      </div>
      <div className="flex h-8 col-span-1">
        <img
          className="h-8 mx-8"
          alt="create"
          src="https://cdn.icon-icons.com/icons2/3237/PNG/512/social_media_chatting_tool_add_video_icon_197449.png"
        />
        <img
          className="h-8 mx-8"
          alt="notifications"
          src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
        />
        <img
          className="h-8 mx-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZYorkKac9Q0WNiMbJDj5jzFEgtSpc3eNixWoLWrvVh5cVTdNcn1Y2ZDxX0SHvLwTdCI&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
