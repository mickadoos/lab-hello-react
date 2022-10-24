import logo from '../images/ironhack-logo-xs.png'
import icon from "../images/menu-top-xs.png"

function Header() {
    return(<div className='App-header'>
        <nav>
        <img className="" src={logo} alt="ironhack-logo" />
        <img src={icon} alt="menu logo" />
        </nav>
        <section>
            <h1>Say Hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button>Awesome!</button>
        </section>
    </div>);
}

export default Header;