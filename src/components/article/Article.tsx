import "./Article.css";

// types
type Props = {
	image: string;
	date: string;
	title: string;
};

const Article = ({ image, date, title }: Props) => {
	return (
		<article className="article">
			<img src={image} alt="Article Cover" className="article__image" />
			<div className="article__body">
				<h6 className="article__date">{date}</h6>
				<h3 className="article__title">{title}</h3>
				<a className="article__action">read full article</a>
			</div>
		</article>
	);
};

export default Article;
