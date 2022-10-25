import logo from '../images/ironhack-logo-xs.png'
import icon from "../images/menu-top-xs.png"

function Header() {
    return(<div className='App-header'>


{/* Navbar from bootstrap */}
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://www.ironhack.com/es?utm_source=google&utm_medium=cpc&utm_campaign=BCN_Spain_Barcelona_Global_Search_Brand_ES&utm_content=search-brand&utm_term=ironhack&gclid=Cj0KCQjwkt6aBhDKARIsAAyeLJ0WgeMc_BY70S3ud4ZOa5XB1fq4JO8zf_1fF0KtZDiRa7b-aJ_UOssaAtRVEALw_wcB"><img className="" src={logo} alt="ironhack-logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={icon} alt="menu logo" />
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

        <section>
            <h1>Say Hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button>Awesome!</button>
        </section>
    </div>);
}

export default Header;