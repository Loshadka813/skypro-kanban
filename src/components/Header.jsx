import { useEffect } from "react";
import { useState } from "react";
import { PopUser } from "./PopUser.jsx";

export default function Header() {
	const [openPopUser, setOpenPopUser] = useState(false)

	useEffect(() => {
		const handleClick = (event) => {
			if (!event.target.closest('#user-set-target') && !event.target.closest('.header__user')) {
				setOpenPopUser(false);
			}
		};

		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<header className="header">
			<div className="container">
				<div className="header__block">
					<div className="header__logo _show _light">
						<a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
					</div>
					<div className="header__logo _dark">
						<a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
					</div>
					<nav className="header__nav">
						<button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
						<p
							className="header__user _hover02"
							onClick={(e) => {
								e.stopPropagation();
								setOpenPopUser((prev) => !prev);
							}}
						>
							Ivan Ivanov
						</p>
						{openPopUser && <PopUser />}
					</nav>
				</div>
			</div>
		</header>
	)
}