export default function User({ name, title, mail, image }) {
	return (
		<article className="user-card">
			<img
				src={image}
				alt={name}
			></img>
			<h2>{name}</h2>
			<p>{title}</p>
			<a href={`mailto:${mail}`}>{mail}</a>
		</article>
	);
}