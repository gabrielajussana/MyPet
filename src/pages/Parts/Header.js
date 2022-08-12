import { Link } from "react-router-dom";
import '../../global.css';
import login from "../../assets/login.svg";
import logo from '../../assets/logo.png'

function Header(){
  return(
    <header>
        <span className="logo"><img src={logo} alt="logo" />MyPet</span>
        <nav>
            <Link to="/" style={{ textDecoration: 'none' }}><p>INÍCIO</p></Link>
            <Link to="/" style={{ textDecoration: 'none' }}><p>SOBRE NÓS</p></Link>
            <Link to="/" style={{ textDecoration: 'none' }}><p>FAQ</p></Link>
        </nav>
         <Link to={`../form`} style={{ textDecoration: 'none' }} className='sign-up'><p>CADASTRE-SE</p> <img src={login} alt='sign up' /></Link>
  </header>
  )
}

export default Header;