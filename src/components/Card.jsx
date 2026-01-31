export default function Card({ content }) {
  return (
    <div className="card ">
      <figure>
        <img className="w-full" src={content.image} alt={content.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{content.title}</h2>
        <p>{content.description}</p>
      </div>
    </div>
  );
}
