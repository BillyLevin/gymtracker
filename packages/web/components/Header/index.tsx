import Link from 'next/link';
import Logo from '../Logo';
import './Header.scss';
import LogoutButton from './LogoutButton';

const Header: React.FC = () => (
  <header className="header">
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>

    <LogoutButton />
  </header>
);

export default Header;
