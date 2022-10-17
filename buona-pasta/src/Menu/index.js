import './Menu.css';

const Menu = () => {
  return(
    <section className='menu'>
      <div className='container-produtos'>
        <h2 className='titulo-produtos'>Produtos Artesanais</h2>
        <button className='produtos'>
          <a href='/'>
            Conheça nossos Produtos 
          </a>
        </button>
      </div>

      <div>
        <img src='../../images/brusqueta.jpg' alt='Imagem de uma brusqueta saborosa' />
      </div>
    </section>
  )
}

export default Menu;