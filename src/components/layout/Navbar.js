import { Link } from "react-router-dom"
import Container from "./Container"
import logo from "../../img/logo.png"
import styles from "./Navbar.module.css"

export function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className={styles.img_logo} src={logo} alt="costs"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item} >    
                <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                <Link to="/project">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}