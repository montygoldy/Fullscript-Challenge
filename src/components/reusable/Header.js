
// Images
import logo from '../../assets/logo_placeholder.png';

const Header = () => {
  return (
    <header className="app-header">
      <div className="left-side">
        <img src={logo} alt="logo" />
        <div className="app-header-title">Logo</div>
      </div>
    </header>
  );
}

export default Header;
