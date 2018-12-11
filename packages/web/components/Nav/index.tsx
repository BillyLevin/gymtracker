import { FaDumbbell, FaAppleAlt } from 'react-icons/fa';

import './Nav.scss';

const Nav: React.FC = () => (
  <nav className="nav">
    <ul className="nav__list">
      <div className="nav__header">
        <h3>Exercise </h3>
        <FaDumbbell />
      </div>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Exercises
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Routines
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Today
        </a>
      </li>
      <div className="nav__header">
        <h3>Diet </h3>
        <FaAppleAlt />
      </div>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Ingredients
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Meals
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Today
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
