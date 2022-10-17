import './Navbar.css';

const Navbar = () => {
  return(
    <header>
      <div className='container-logo'>
        <a className='logo' href='/'>
          Buona <span>Pasta</span>
        </a>
      </div>

      <nav className='nav-links'>
        <ul>
          <li><a href='/'>Sobre</a></li>
          <li><a href='/'>Produtos</a></li>
          <li><a href='/'>Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;