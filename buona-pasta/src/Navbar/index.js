import './Navbar.css';

const Navbar = () => {
  return(
    <header>
      <a className='logo' href='/'>
        Buona <span>Pasta</span>
      </a>

      <nav className='nav-links'>
        <ul>
          <li>Sobre</li>
          <li>Produtos</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;