import "./Header.css";
import Logo from "../../assets/img/img/img/logo.svg"
const Header = () => {
    return(
        <header>
            <div className="layout_grid"></div>
            <img src={Logo} alt="Logo de Filmoteca"/>


            <nav className="nav_header">
            <a className ="link_header" href="">Filme</a>
            <a className ="link_header" href="">Genero</a>
            </nav>
        </header>

    )
}

export default Header;
