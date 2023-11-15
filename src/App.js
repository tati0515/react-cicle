import logo from "./logo.svg";
import logocicle from "./assets/logocicle.png";
import mtb from "./assets/mtb.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Inicio
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="https://www.gorigogo.com/pages/contactanos">
                    Contactanos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.gorigogo.com/collections/todas-las-bicicletas?filter.v.availability=1">
                    Link
                  </a>
                </li>
                
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <div className="content-article">
        <div className="img">
          <img src={logocicle} class="w-100" alt="..." />
        </div>
        <div>
          <div className="description">
            <p>
              TREK MARLIN 5 Es una constante en estos listados año tras año. La
              Marlin 5 tiene puntos a favor y alguna flaqueza. Su punto fuerte
              es quizá su número de velocidades, 21 distribuidas en 7 piñones y
              3 platos. Sus aspectos favorables continúan con su cuadro de
              aluminio Alpha Silver con cableado interno, un detallazo, y una
              horquilla SR Suntour XCE 28 de 100mm de recorrido, algo raro en
              estas horquillas tan justas de mountain bikes por menos de 500€ de
              2021. Componentes Bontrager, como llantas Connection o sillín
              Arvada. Cambio Shimano Tourney TY300 y pesa algo más de 14,5kg.
              Disponible en hasta 7 tallas.
            </p>
          </div>
        </div>
      </div>
      <div className="content-article">
        <div className="img">
          <img src={mtb} class="d-block w-100" alt="..." />
        </div>
        <div>
          <div className="description">
            <p>
              TREK MARLIN 5 Es una constante en estos listados año tras año. La
              Marlin 5 tiene puntos a favor y alguna flaqueza. Su punto fuerte
              es quizá su número de velocidades, 21 distribuidas en 7 piñones y
              3 platos. Sus aspectos favorables continúan con su cuadro de
              aluminio Alpha Silver con cableado interno, un detallazo, y una
              horquilla SR Suntour XCE 28 de 100mm de recorrido, algo raro en
              estas horquillas tan justas de mountain bikes por menos de 500€ de
              2021. Componentes Bontrager, como llantas Connection o sillín
              Arvada. Cambio Shimano Tourney TY300 y pesa algo más de 14,5kg.
              Disponible en hasta 7 tallas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
