import "./Feature.css";

// types
type Props = {
	title: string;
	text: string;
};

const Feature = ({ title, text }: Props) => {
	return (
		<div className="feature__container">
			<h3 className="feature__title">{title}</h3>
			<p className="feature__text">{text}</p>
		</div>
	);
};

export default Feature;
