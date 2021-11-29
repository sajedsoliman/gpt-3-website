import "@styles/Footer.css";
import logo from "@assets/logo.svg";

const Footer = () => {
	return (
		<footer className="footer section__padding">
			<div className="footer__top-content">
				<h2 className="footer__heading gradient__text heading">
					Do you want to step in to the future before others
				</h2>
				<button className="footer__action">request early access</button>
			</div>
			<div className="footer__bottom-content">
				<div className="footer__info">
					<img src={logo} alt="GPT Logo" className="footer__logo" />
					<h5>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</h5>
				</div>

				<div className="footer__links-grid">
					<div className="footer__links-column">
						<h5>links</h5>
						<ul>
							<li>overons</li>
							<li>social media</li>
							<li>counters</li>
							<li>contact</li>
						</ul>
					</div>
					<div className="footer__links-column">
						<h5>company</h5>
						<ul>
							<li>terms &amp; conditions</li>
							<li>privacy policy</li>
							<li>contact</li>
						</ul>
					</div>
					<div className="footer__links-column">
						<h5>get in touch</h5>
						<address className="address">
							<p>Crechterwoord K12 182 DK Alknjkcb</p>
							<p>085-132567</p>
							<p>info@payme.net</p>
						</address>
					</div>
				</div>
			</div>
			<h5 className="footer__copyright">
				2021&copy; GPT-3. All rights reserved.
			</h5>
		</footer>
	);
};

export default Footer;
