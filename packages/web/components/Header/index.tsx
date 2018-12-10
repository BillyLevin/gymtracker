import Logo from '../Logo';
import Button from '../Button';

import './Header.scss';

const Header: React.FC = () => (
  <header className="header">
    <Logo />
    <Button type="button" theme="primary">
      Log Out
    </Button>
  </header>
);

export default Header;
