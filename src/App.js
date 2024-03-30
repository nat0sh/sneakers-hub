import "./index.scss";
import Card from "./components/Card"
import Header from "./components/Header";
import Offcanvas from "./components/Offcanvas";

function App() {
  return (
    <div className="wrapper">

      <Offcanvas/>
    
      <Header />
      <div className="content">
        <div className="d-flex mb-5 align-items-center justify-content-between">
          <h1>
            <b>Все кроссовки</b>
          </h1>
          <div className="search-block d-flex align-items-center">
            <i className="bi bi-search"></i>
            <input placeholder="Поиск ..." />
          </div>
        </div>
        {/* fihgfhfho */}
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />

          
        </div>
      </div>
    </div>
  );
}

export default App;
