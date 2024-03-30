function Header() {
    return (
        <header>
        <div className="headerLeft">
          <img src="/img/logo.png" width={50} height={50} alt="logo" />
          <div>
            <h3>
              <b>SNEAKERS HUB</b>
            </h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
        <div className="headerRight">
          <ul className="d-flex">
            <li className="licart">
              <i className="bi bi-cart2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
            </li>
            <li>
              <i className="bi bi-person bi-lg"></i>
            </li>
          </ul>
        </div>
      </header>
    );
}

export default Header;