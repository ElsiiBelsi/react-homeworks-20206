import {useNavigation} from "react-router-dom";

function card ({item}) {
    const navigation = useNavigation();

    return (
        <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
            <h3>{item.name}</h3>
            <button 
            onClick={(
            ) => navigate ("/details/" + item.name)}>Details</button>
        </div>
    );
}

export default card;