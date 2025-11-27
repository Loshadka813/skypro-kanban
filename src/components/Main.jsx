import Card from "./Card.jsx";
import Column from "./Column.jsx";

export default function Main() {
    return (
        <main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
                        <Column/>
                        
						<div className="main__column">
							<div className="column__title">
								<p>Нужно сделать</p>
							</div>
							<div className="cards">
								<div className="cards__item">
									<Card/>
								</div>
							</div>
						</div>
						<div className="main__column">
							<div className="column__title">
								<p>В работе</p>
							</div>
							<div className="cards">
								<div className="cards__item">
									<Card/>
								</div>
						
								<div className="cards__item">
									<Card/>
								</div>
						
								<div className="cards__item">
									<Card/>
								</div>
							</div>
						</div>
						<div className="main__column">
							<div className="column__title">
								<p>Тестирование</p>
							</div>
							<div className="cards">
								<div className="cards__item">
									<Card/>
								</div>
							</div>
						</div>
						<div className="main__column">
							<div className="column__title">
								<p>Готово</p>
							</div>
							<div className="cards">
								<div className="cards__item">
									<Card/>
								</div>
							</div>
						</div>
				
						
					</div>
				
				</div>
			</div>
		</main>
    )
}