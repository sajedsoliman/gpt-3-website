import "./Brand.css";

import googleImg from "@assets/google.png";
import slackImg from "@assets/slack.png";
import atlassianImg from "@assets/atlassian.png";
import dropboxImg from "@assets/dropbox.png";
import shopifyImg from "@assets/shopify.png";

const Brand = () => {
	return (
		<section className="brand__wrapper section__padding">
			<div>
				<img src={googleImg} alt="Google" />
			</div>
			<div>
				<img src={slackImg} alt="Slack" />
			</div>
			<div>
				<img src={atlassianImg} alt="Atlassian" />
			</div>
			<div>
				<img src={dropboxImg} alt="Dropbox" />
			</div>
			<div>
				<img src={shopifyImg} alt="Shopify" />
			</div>
		</section>
	);
};

export default Brand;
