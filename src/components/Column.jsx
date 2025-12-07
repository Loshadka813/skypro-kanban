import { cartList } from "../../data.js";
import CardLoader from "./CardLoader.jsx";
import Card from "./Card.jsx";

export default function Column({ title, loading }) {
	return (
		<div className="main__column column">
			<div className="column__title">
				<p>{title}</p>
			</div>
			<div className="cards">
				{
					cartList
						.filter((item) => item.status === title)
						.map((item, i) =>
							loading ? (
								<CardLoader key={i} />
							) : (
								<Card item={item} key={item.id} /> 
						)
						)
				}
			</div>
		</div>
	)
}