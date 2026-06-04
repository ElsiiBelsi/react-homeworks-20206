import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
    const {name} = useParams();
    const [uni, setUni] = useState(null);

    useEffect(() => {
        fetch("http://universities.hipolabs.com/search?name=" + name)
        .then((res) => res.json())
        .then ((res) => setUni(res[0]));
    }, [name]);

if(!uni) return <h2>Loading...</h2>;

return (
    <div>
        <h1>{uni.name}</h1>
        <p> {uni.country}</p>
        <a href={uni.web_pages[0]}>Visit Website</a>

    </div>
);
}



export default Details; 