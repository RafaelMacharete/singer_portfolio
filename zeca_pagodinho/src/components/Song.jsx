import style from './Song.module.css';

// Song component displays a song 
export default function Song({ title, description, image, album }) {
    return (
        // Article for each song card
        <article className={style.songCard}>
            {/* Song image */}
            <img className={style.songImage} src={image} alt={title} />
            <div className={style.songContent}>
                {/* Song title */}
                <h3 className={style.songTitle}>{title}</h3>
                {/* Song album */}
                <p className={style.songAlbum}><strong>Album:</strong> {album}</p>
                {/* Song description (optional) */}
                {description && <p className={style.songDescription}>{description}</p>}
            </div>
        </article>
    );
}
