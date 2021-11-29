import "@styles/WhatGPT.css";

// components
import Feature from "@/components/feature/Feature";

const WhatGPT = () => {
	return (
		<section className="section__whatGPT3 section__margin" id="whgpt">
			<div className="whatGPT3__feature">
				<h2>What is GPT3</h2>
				<p>
					We so opinion friends me message as delight. Whole front do of plate
					heard oh ought. His defective nor convinced residence own. Connection
					has put impossible own apartments boisterous. At jointure ladyship an
					insisted so humanity he. Friendly bachelor entrance to on by.
				</p>
			</div>

			<div className="whatGPT__explore-library">
				<h2 className="gradient__text">
					The possibilities are beyond your imagination
				</h2>
				<span>explore the library</span>
			</div>

			<div className="whatGPT__features-container">
				<Feature
					title="Chatbots"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
				/>
				<Feature
					title="Knowledgebase"
					text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
				/>
				<Feature
					title="Education"
					text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
				/>
			</div>
		</section>
	);
};

export default WhatGPT;
