import logoImg from "@assets/logo.svg";

// hooks
import { useToggle } from "@/reusables/hooks";

// utils
import clsx from "clsx";

const Header = () => {
	const [mobileNavVisible, toggleMobileNav] = useToggle(false);

	return (
		<header className="header">
			{/* logo */}
			<a href="/" className="logo">
				<img src={logoImg} alt="GPT-3 Logo" />
			</a>

			{/* navbar */}
			<nav className="navbar">
				<ul className="links_list">
					{links.map((link) => (
						<li className="link__item">
							<a href={link.path}>{link.text}</a>
						</li>
					))}
				</ul>
			</nav>

			<div className="navbar__wrapper push-right">
				{/* action: sign in and up */}
				<nav className="actions__nav">
					<a href="/login" className="link__item">
						sign in
					</a>
					<a href="/register" className="link__item action__button">
						Sign up
					</a>
				</nav>

				<nav className="mobile__navbar">
					<button
						type="button"
						className={clsx(
							"mobile__navbar-toggler",
							mobileNavVisible ? "active" : ""
						)}
						onClick={toggleMobileNav}
					>
						<div />
						<div />
						<div />
					</button>

					<ul
						className={clsx(
							"mobile__navbar-menu",
							mobileNavVisible && "active"
						)}
					>
						{links.map((link) => (
							<li className="link__item">
								<a href={link.path}>{link.text}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

const links = [
	{
		text: "home",
		path: "#home",
	},
	{
		text: "what is GPT?",
		path: "#whgpt",
	},
	{
		text: "case studies",
		path: "#features",
	},
	{
		text: "open ai",
		path: "#possibility",
	},
	{
		text: "blog",
		path: "#blog",
	},
];
