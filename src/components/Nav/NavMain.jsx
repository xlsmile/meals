const NavMain = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="/" className="nav__list-link">
            About Us
          </a>
        </li>
        <li className="nav__list-item">
          <a href="/" className="nav__list-link">
            Our Salads
          </a>
        </li>
        <li className="nav__list-item">
          <a href="/" className="nav__list-link">
            Your Orders
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
