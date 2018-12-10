import './Nav.scss';

const Nav: React.FC = () => (
  <nav className="nav">
    <ul className="nav__list">
      <h3 className="nav__header">Exercise</h3>
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
      <h3 className="nav__header">Diet</h3>
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
