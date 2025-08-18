import style from './Discography.module.css'
import Header from '../components/Header';
import pixote from '../assets/pixote.jpg';
import sambaForLadies from '../assets/samba_pras_mocas.jpg';
import Card from '../components/Card';
import boyWay from '../assets/jeito_moleque.jpg'
import ourHabit from '../assets/mania_da_gente.jpg';
import Footer from '../components/Footer';

export default function Discography() {
    return(
        <>
            {/* Header component for site navigation */}
            <Header />
            {/* Main content area */}
            <main>
                <h1 className={style.title}>Discografia</h1>
                <p className={style.description}>Álbuns de Zeca Pagodinho</p>

                <section>
                    <ul className={style.albumList}>
                        <li>
                            <Card
                                title="Pixote"
                                image={pixote}
                                description="Lançamento: 1991"
                            />
                        </li>
                        <li>
                            <Card
                                title="Samba pras Moças"
                                image={sambaForLadies}
                                description="Lançamento: 1995"
                            />
                        </li>
                        <li>
                            <Card
                                title="Jeito Moleque"
                                image={boyWay}
                                description="Lançamento: 1988"
                            />
                        </li>
                        <li>
                            <Card
                                title="Mania da Gente"
                                image={ourHabit}
                                description="Lançamento: 1990"
                            />
                        </li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    )
}