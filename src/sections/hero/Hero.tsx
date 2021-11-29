import "@styles/Hero.css";
import peopleImg from "@assets/people.png";
import AIImg from "@assets/ai.png";

// components
import { Header } from "@/components";

const Hero = () => {
	return (
		<section className="section__padding gradient__bg">
			<Header />

			<div className="content grid__layout-2rows" id="home">
				<div className="info">
					<h1 className="heading gradient__text">
						Let's Build Something amazing with GPT-3 OpenAI
					</h1>
					<p className="description">
						Yet bed any for travelling assistance indulgence unpleasing. Not
						thoughts all exercise blessing. Indulgence way everything joy
						alteration boisterous the attachment. Party we years to order allow
						asked of.
					</p>
					<div className="input">
						<input type="email" placeholder="Email Address" />
						<button type="button">Get Started</button>
					</div>
					<div className="stats">
						<img src={peopleImg} alt="avatars" />
						<h4>1,600 people requested access a visit in last 24 hours</h4>
					</div>
				</div>
				<div className="image">
					<img src={AIImg} alt="Artificial Intelligence" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
