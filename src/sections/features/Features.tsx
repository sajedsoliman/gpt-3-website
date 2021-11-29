import "@styles/Features.css";

// components
import Feature from "@/components/feature/Feature";

const Features = () => {
	return (
		<section className="features__container section__padding" id="features">
			<div className="features__heading">
				<h2 className="gradient__text">
					The Future is Now and You Just Need To Realize It. Step into Future
					Today &amp; Make it Happen.
				</h2>
				<span>Request Early Access to Get Started</span>
			</div>

			<div className="features__features-container">
				<Feature
					title="Improving end distrusts instantly"
					text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
				/>
				<Feature
					title="Become the tended active"
					text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
				/>
				<Feature
					title="Message or am nothing"
					text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
				/>
				<Feature
					title="Really boy law county"
					text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
				/>
			</div>
		</section>
	);
};

export default Features;
