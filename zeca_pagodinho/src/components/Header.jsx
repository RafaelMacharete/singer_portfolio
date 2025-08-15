import { Link } from 'react-router-dom';
import style from './Header.module.css';

export default function Header() {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/discography">Discografia</Link></li>
                    <li><Link to="/popular-songs">Músicas Populares</Link></li>
                </ul>
            </nav>
        </header>
    );
}
