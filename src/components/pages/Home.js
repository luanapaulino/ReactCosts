import styles from './Home.module.css'
import Linkbutton from '../layout/Linkbutton'

export function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo</p>
            <Linkbutton to="/newproject" text="Criar Projeto"/>
        </section>
    )
}

