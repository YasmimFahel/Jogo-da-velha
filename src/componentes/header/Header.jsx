import styles from './Header.module.css'
import Subtitle from "../subtitle/Subtitle"
import Title from "../title/Title"

function Header () {
    return(
       <div className={styles.header}>
        <Title>Jogo Da Velha</Title>
        <Subtitle>Criado por Yasmim Fahel</Subtitle>
       </div>
    )
}

export default Header