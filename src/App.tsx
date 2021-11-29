import "./styles/App.css";

// components
import Brand from "@/components/brand/Brand";

// sections
import {
	Hero,
	WhatGPT,
	Features,
	Possibility,
	CTA,
	Blog,
	Footer,
} from "./sections";

function App() {
	return (
		<div>
			<Hero />
			<Brand />
			<WhatGPT />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
}

export default App;
