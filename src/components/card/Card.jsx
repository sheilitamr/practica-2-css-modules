const Card = ({ title, text, src, alt }) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{text}</p>
			<img src={src} alt={alt} />
		</div>
	);
};

export default Card;
