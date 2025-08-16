import style from './Header.module.css';
import { Link } from 'react-router-dom';

// Header component with semantic navigation
export default function Header() {
    return (
        // Semantic header for site navigation
        <header className={style.header}>
            {/* Navigation bar */}
            <nav className={style.nav} aria-label="Main navigation">
                {/* Navigation list */}
                <ul>
                    {/* Home link */}
                    <li><Link to="/">Home</Link></li>
                    {/* Discography link */}
                    <li><Link to="/discography">Discography</Link></li>
                    {/* Popular Songs link */}
                    <li><Link to="/popular-songs">Popular Songs</Link></li>
                </ul>
            </nav>
        </header>
    );
}
