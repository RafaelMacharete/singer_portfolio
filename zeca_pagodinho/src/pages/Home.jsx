import Header from "../components/Header";
import ZecaPagodinho from '../assets/zeca.jpg';
import styles from './Home.module.css';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <figure>
                    <img src={ZecaPagodinho} alt="Zeca Pagodinho" />
                    <figcaption>Jessé Gomes da Silva Filho</figcaption>
                </figure>
                <section className={styles.singerDescription}>
                    <h1 className={styles.singerName}>Sobre Zeca Pagodinho</h1>
                    <p className={styles.singerInfo}>
                        Jessé Gomes da Silva Filho, conhecido pelo nome artístico Zeca Pagodinho
                        (Rio de Janeiro, 4 de fevereiro de 1959), é um cantor e compositor brasileiro
                        atuante desde o final da década de 1980 e atualmente tido pela crítica e
                        pela imprensa especializada como um dos mais exponenciais nomes do samba.
                    </p>
                </section>
            </main>
        </>
    );
}