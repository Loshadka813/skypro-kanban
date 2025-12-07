import Loader from "./Loader.jsx";

const CardLoader = () => {
    return (
        <div className="cards__item">
            <div className="cards__card card">
                <div className="card__group">
                    {/* Цветная строка */}
                    <Loader width={71} height={20} borderRadius={18} />
                    {/* Три точки */}
                    <Loader width={21} height={4} />
                </div>
                <div className="card__content">
                    <Loader width={114} />
                    <div className="card__date">
                        <Loader width={60} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardLoader;

