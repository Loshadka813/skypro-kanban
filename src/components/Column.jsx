import Card from "./Card.jsx";

export default function Column({ title, cards }) {
	return (
		<div className="main__column column">
			<div className="column__title">
				<p>{title}</p>
			</div>
			<div className="cards">
				{cards.map((card, index) => (
					<div className="cards__item" key={index}>
						<Card themeText={card.themeText} themeColor={card.themeColor} />
					</div>
				))}
			</div>
		</div>
	)
}