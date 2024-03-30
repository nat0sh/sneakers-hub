
function Card() {
    return (
        <div className="card">
            <div className="favourite">
              <img src="/img/heart.svg" alt="heart" />
            </div>
            <img
              src="/img/sneakers/1.jpg"
              alt="sneakers"
              width={133}
              height={112}
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>19 990 тг</b>
              </div>
              <button>
                <img src="/img/plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
    
    );
}

export default Card;