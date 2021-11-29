import "@styles/Blog.css";
import blog1Img from "@assets/blog01.png";
import blog2Img from "@assets/blog02.png";
import blog3Img from "@assets/blog03.png";
import blog4Img from "@assets/blog04.png";
import blog5Img from "@assets/blog05.png";

// components
import Article from "@/components/article/Article";

const Blog = () => {
	return (
		<section className="section__padding" id="blog">
			<h2 className="blog__heading gradient__text">
				A lot is happening, We are blogging about it.
			</h2>
			<div className="blog__articles-grid">
				<Article
					image={blog1Img}
					title="GPT-3 and Open AI is the future. Let us exlore how it is?"
					date="Sep 26, 2021"
				/>
				<Article
					image={blog2Img}
					title="GPT-3 and Open AI is the future. Let us exlore how it is?"
					date="Sep 26, 2021"
				/>
				<Article
					image={blog3Img}
					title="GPT-3 and Open AI is the future. Let us exlore how it is?"
					date="Sep 26, 2021"
				/>
				<Article
					image={blog4Img}
					title="GPT-3 and Open AI is the future. Let us exlore how it is?"
					date="Sep 26, 2021"
				/>
				<Article
					image={blog5Img}
					title="GPT-3 and Open AI is the future. Let us exlore how it is?"
					date="Sep 26, 2021"
				/>
			</div>
		</section>
	);
};

export default Blog;
