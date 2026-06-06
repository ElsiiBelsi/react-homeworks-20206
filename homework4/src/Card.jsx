import { useNavigate } from "react-router-dom";

function Card({ item }) {
    const navigate = useNavigate();

    return (
        <div className="card">
     
            <h3 className="title">{item.name}</h3>
            <p className="country">{item.country}</p>
            <button className="details-btn" onClick={() => navigate("/details/" + item.name)}>
                Details
            </button>
        </div>
    );
}

export default Card;