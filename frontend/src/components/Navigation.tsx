import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/SnapScout/mountain">Mountain</NavLink></li>
        <li><NavLink to="/SnapScout/beach">Beaches</NavLink></li>
        <li><NavLink to="/SnapScout/bird">Birds</NavLink></li>
        <li><NavLink to="/SnapScout/food">Food</NavLink></li>
      </ul>
    </nav>
  );
};
