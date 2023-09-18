import renderToDOM from '../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <button id="landing-page-btn"> <image src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png" style="height:80px;"></image> </button>
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button class="nav-link" href="#" id="add-order-btn">
                Create Order <span class="sr-only">(current)</span>
              </button>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="view-orders">View Orders</a>
          </li>
            <li>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Orders"
              aria-label="Search"
            />
            </li>
          </ul>
          <button type="button" class="btn btn-danger" id="new-logout">Logout</button>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
