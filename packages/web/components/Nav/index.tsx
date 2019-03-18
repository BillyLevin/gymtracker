import Link from 'next/link';
import { FaAppleAlt, FaDumbbell } from 'react-icons/fa';
import './Nav.scss';

const Nav: React.FC = () => (
  <nav className="nav">
    <ul className="nav__list">
      <div className="nav__header">
        <h3>Exercise </h3>
        <FaDumbbell />
      </div>
      <li className="nav__item">
        <Link href="/exercises">
          <a className="nav__link">Exercises</a>
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/routines">
          <a className="nav__link">Routines</a>
        </Link>
      </li>
      <div className="nav__header">
        <h3>Diet </h3>
        <FaAppleAlt />
      </div>
      <li className="nav__item">
        <Link href="/create-meal">
          <a className="nav__link">Create Meal</a>
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/meals">
          <a className="nav__link">Meals</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
