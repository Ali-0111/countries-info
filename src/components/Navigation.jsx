import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <header className="main-head">
      <h2>Logo</h2>
      <nav>
        <ul>
          <li>
            <NavLink className="link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/details">Details</NavLink>
          </li>
        </ul>
      </nav>
    </header>

  );
}

export default Navigation;
