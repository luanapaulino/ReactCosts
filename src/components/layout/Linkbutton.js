import styles from './Linkbutton.module.css'
import { Link } from 'react-router-dom'

export default function Linkbutton({to, text}){
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}