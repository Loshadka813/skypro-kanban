import Card from "./Card.jsx";
import Column from "./Column.jsx";
import columns from "./arrayColumns.jsx";


export default function Main() {
	return (
		<main className="main">
			<div className="container">

				<div className="main__block">
					<div className="main__content">
						{columns.map((col, index) => (
							<Column key={index} title={col.title} cards={col.cards} />
						))}
					</div>

				</div>
			</div>
		</main>
	)
}