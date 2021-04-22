
// Images
import logo from '../../assets/logo_placeholder.png';

const Header = () => {
  return (
    <header className="app-header">
      <div className="left-side">
        <img src={logo} alt="logo" />
        <h1 className="app-header-title">Logo</h1>
      </div>
    </header>
  );
}

export default Header;
