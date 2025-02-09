import { useState } from "react";

const Tour = ({ tour, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
    const { image, info, name, price, id } = tour;
    return (
        <div className="single-tour">
            <span className="tour-price">{price}</span>
            <img src={image} alt={name} className="img" />
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    {readMore
                        ? info
                        : info.substring(0, 150) +
                          (info.length > 150 ? "..." : "")}
                </p>
                <button
                    className="info-btn"
                    onClick={() => {
                        setReadMore(!readMore);
                    }}
                >
                    Show {readMore ? "Less" : "More"}
                </button>
                <button
                    type="button"
                    className="btn delete-btn btn-block"
                    onClick={() => removeTour(id)}
                >
                    Not Interested
                </button>
            </div>
        </div>
    );
};

export default Tour;
