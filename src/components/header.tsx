import styles from './Header.module.css';
import IgniteLogo from '../assets/ignite-logo.svg';

console.log(IgniteLogo);

export function Header() {
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt='Ignite Logo'/>
            
        </header>
    );
}