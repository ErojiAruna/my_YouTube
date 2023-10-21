import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg col-span-1">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <ul className="pt-5">
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sport</li>
        <li>Learning</li>
        <li>Fashion & beauty</li>
        <li>Podcasts</li>
      </ul>
      <ul className="pt-5">
        <li>Settings</li>
        <li>Report history</li>
        <li>Help</li>
        <li>Send feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
