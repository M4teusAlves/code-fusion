import styles from './Header.module.css'

import CodeFusionLogo from '../assets/codeFusion-logo.png'

export function Header () {
    return(
        <header className={styles.header}>
            <img src={CodeFusionLogo} alt="Logotipo do Code Fusion" />
            <strong>Code Fusion</strong>
        </header>
        
    )
}