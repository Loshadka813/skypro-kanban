import Card from "./Card.jsx";

export default function Column() {
    return(
        <div className="main__column column">
							<div className="column__title">
								<p>Без статуса</p>
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
								
								<div className="cards__item">
									<Card/>
								</div>
								
								<div className="cards__item">
									<Card/>
								</div>
							</div>
		</div>	
    )
}