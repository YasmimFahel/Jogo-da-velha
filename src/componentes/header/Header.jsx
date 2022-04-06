import styles from './Header.module.css'
import Subtitle from '../subtitle/Subtitle'
import Title from '../title/Title'
import Icon from '../icon/Icon'

function Header () {
    return(
       <div className={styles.header}>
        <Title>Jogo Da Velha</Title>
        <Subtitle>Criado por Yasmim Fahel</Subtitle>
        <div className={styles.iconcontent}>
            <Icon iconName="github" link="https://github.com/YasmimFahel" />
        </div>
       </div>
    )
}

export default Header