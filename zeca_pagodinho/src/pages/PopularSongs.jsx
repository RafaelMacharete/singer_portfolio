import Header from "../components/Header";
import Song from "../components/Song";
import firstSong from "../assets/musica1.jpg";
import secondSong from "../assets/musica2.jpg";
import thirdSong from "../assets/musica3.jpg";
import fourthSong from "../assets/musica4.jpg";
import fifthSong from "../assets/musica5.jpg";
import style from './PopularSongs.module.css';
import Footer from "../components/Footer";

// Displays a list of popular songs
export default function PopularSongs() {
    return (
        <>
            {/* Header component for site navigation */}
            <Header />
            {/* Main content area */}
            <main>
                {/* Page title */}
                <header>
                    <h1 className={style.title}>Músicas Populares</h1>
                    <p className={style.description}>Uma seleção das músicas mais populares de Zeca Pagodinho.</p>
                </header>
                {/* Section containing the list of songs */}
                <section aria-labelledby="popular-songs-list">
                    {/* Ordered list for song ranking */}
                    <ol id="popular-songs-list">
                        {/* Each song is a list item containing a Song card */}
                        <li>
                            <Song
                                title="Camarão que dorme a onda leva"
                                description="Descrição da Música 1"
                                image={firstSong}
                                album="ZECA PAGODINHO AO VIVO - 1999"
                            />
                        </li>
                        <li>
                            <Song
                                title="Deixa a vida me levar"
                                description="Descrição da Música 2"
                                image={secondSong}
                                album="DEIXA A VIDA ME LEVAR"
                            />
                        </li>
                        <li>
                            <Song
                                title="Judia de mim"
                                description="Descrição da Música 3"
                                image={thirdSong}
                                album="ACÚSTICO MTV - ZECA PAGODINHO 2 - GAFIEIRA"
                            />
                        </li>
                        <li>
                            <Song
                                title="Verdade"
                                description="Descrição da Música 4"
                                image={fourthSong}
                                album="Deixa Clarear"
                            />
                        </li>
                        <li>
                            <Song
                                title="Coração em desalinho"
                                description="Descrição da Música 5"
                                image={fifthSong}
                                album="ZECA PAGODINHO AO VIVO - 1986"
                            />
                        </li>
                    </ol>
                </section>
            </main>
            <Footer />
        </>
    );
}