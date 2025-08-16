import style from './Card.module.css';

// Card component displays a highlight or feature as a semantic card
export default function Card({ title, image, description }) {
  return (
    // Use article for a self-contained card/feature
    <article className={style.card}>
      {/* Card image */}
      <img src={image} alt={title} />
      {/* Card title as heading */}
      <h2>{title}</h2>
      {/* Card description */}
      <p>{description}</p>
    </article>
  );
}
