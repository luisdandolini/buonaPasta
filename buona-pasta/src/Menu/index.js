import './Menu.css';

const Menu = () => {

  return(
    <>
    <section className='container-menu'>
        <h2>NOSSOS CARDÁPIOS DE COMBOS</h2>
      <div className='container-img'>
        <a href='/'><img src='../images/image-menu.jpg' alt='Imagem prato buona pasta'></img></a>
        <a href='/'><img src='../images/italiand-food1.jpg' alt='Imagem prato buona pasta'></img></a>
        <a href='/'><img src='../images/italiand-food2.jpg' alt='Imagem prato buona pasta'></img></a>
      </div>
    </section>
    
    <section className='container-menu'>
        <h2>DESTAQUES</h2>
      <div className='container-img'>
        <a href='/'><img src='../images/italiand-food3.jpg' alt='Imagem prato buona pasta'></img></a>
        <a href='/'><img src='../images/italiand-food6.jpg' alt='Imagem prato buona pasta'></img></a>
        <a href='/'><img src='../images/italiand-food5.jpg' alt='Imagem prato buona pasta'></img></a>
      </div>
    </section>
    </>
  )
}

export default Menu;