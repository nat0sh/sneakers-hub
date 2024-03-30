function Offcanvas() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h2 className="offcanvas-title" id="offcanvasRightLabel">
          Корзина
        </h2>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="cart-item d-flex align-items-center">
          <img
            src="/img/sneakers/1.jpg"
            width={70}
            height={70}
            alt="sneakers"
          />
          <div className="text">
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b>24 990 тг</b>
          </div>
          <img className="remove" src="/img/remove.svg" alt="remove" />
        </div>
        <div className="cart-item d-flex align-items-center">
          <img
            src="/img/sneakers/1.jpg"
            width={70}
            height={70}
            alt="sneakers"
          />
          <div className="text">
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b>24 990 тг</b>
          </div>
          <img className="remove" src="/img/remove.svg" alt="remove" />
        </div>
        <div className="cart-item d-flex align-items-center">
          <img
            src="/img/sneakers/1.jpg"
            width={70}
            height={70}
            alt="sneakers"
          />
          <div className="text">
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b>24 990 тг</b>
          </div>
          <img className="remove" src="/img/remove.svg" alt="remove" />
        </div>
        <div className="cart-item d-flex align-items-center">
          <img
            src="/img/sneakers/1.jpg"
            width={70}
            height={70}
            alt="sneakers"
          />
          <div className="text">
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b>24 990 тг</b>
          </div>
          <img className="remove" src="/img/remove.svg" alt="remove" />
        </div>
      </div>
      <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>69 990 тг</b>
          </li>
          <li>
            <span>Скидка 5%:</span>
            <div></div>
            <b>3 499 тг</b>
          </li>
        </ul>
        <button>
          Оформить заказ<i className="bi bi-arrow-right-short "></i>
        </button>
      </div>
    </div>
  );
}

export default Offcanvas;
