import Header from "../components/Header";
import zecaPagodinho from '../assets/zeca.jpg';
import styles from './Home.module.css';
import Card from "../components/Card";
import grammy from '../assets/grammy.jpeg';
import zecaThumbsUp from '../assets/zeca_thumbs_up.webp'
import zecaIcon from '../assets/zeca_icon.jpg'
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            {/* Header component for site navigation */}
            <Header />
            {/* Main content area */}
            <main>
                {/* Singer's photo and name using semantic figure */}
                <figure>
                    <img src={zecaPagodinho} alt="Zeca Pagodinho" />
                    <figcaption>Jessé Gomes da Silva Filho</figcaption>
                </figure>
                {/* Section describing the singer */}
                <section className={styles.singerDescription}>
                    <h1 className={styles.singerName}>Sobre Zeca Pagodinho</h1>
                    <p className={styles.singerInfo}>
                        Jessé Gomes da Silva Filho, conhecido pelo nome artístico Zeca Pagodinho
                        (Rio de Janeiro, 4 de fevereiro de 1959), é um cantor e compositor brasileiro
                        atuante desde o final da década de 1980 e atualmente tido pela crítica e
                        pela imprensa especializada como um dos mais exponenciais nomes do samba.
                    </p>
                </section>
                {/* Section with highlight cards about the singer */}
                <section className={styles.singerCards} aria-label="Zeca Pagodinho Highlights">
                    <Card
                        title="40 anos de carreira"
                        image={zecaThumbsUp}
                        description="Fez agora em 2025."
                    />
                    <Card
                        title="Ícone no samba"
                        image={zecaIcon}
                        description="Um dos maiores nomes do samba."
                    />
                    <Card
                        title="grandes prêmios (4 grammy)"
                        image={grammy}
                        description="Um prêmio muito grande."
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}