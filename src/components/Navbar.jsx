import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-start', padding: '10px', background: '#fff' }}>
      <div style={{ marginLeft: 'auto' }}>
        <Link to="/SecondPage" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/" style={{ marginRight: '20px' }}>Grid</Link>
        <a href="https://www.linkedin.com/in/shivani-saini-79193728b/" target="_blank" rel="noreferrer" style={{ marginRight: '20px' }}>
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
