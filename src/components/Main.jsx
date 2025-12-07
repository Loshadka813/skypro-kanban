import Column from "./Column.jsx";


export default function Main({loading} ) {
	return (
		<main className="main">
			<div className="container">

				<div className="main__block">
					<div className="main__content">
						{["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"].map((title, i) => (
							<Column loading={loading} title={title} key={i} />
						))}
					</div>

				</div>
			</div>
		</main>
	)
}