import "@styles/Possibility.css";
import vrImg from "@assets/possibility.png";

const Possibility = () => {
	return (
		<section className="section__padding grid__layout-2rows" id="possibility">
			<div className="possibility__image">
				<img src={vrImg} alt="Virtual Reality" />
			</div>
			<div className="possibility__content">
				<h6>Request Early Access to Get Started</h6>
				<h2 className="gradient__text">
					The possibilities are beyond your imagination
				</h2>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>
				<h6>Request Early Access to Get Started</h6>
			</div>
		</section>
	);
};

export default Possibility;
