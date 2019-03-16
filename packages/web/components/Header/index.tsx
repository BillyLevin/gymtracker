import Logo from '../Logo';
import './Header.scss';
import LogoutButton from './LogoutButton';

const Header: React.FC = () => (
  <header className="header">
    <Logo />
    <LogoutButton />
  </header>
);

export default Header;
