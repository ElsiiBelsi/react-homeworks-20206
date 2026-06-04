import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Card from "../components/Card";

function Universities() {
    const {country} = useParams();
    const {data, setData} = useState([]);
    const {loading, setLoading} = useState(true);
    const {error, setError} = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("http://universities.hipolabs.com/search?country=" + country)
        .then((res) => res.json())
        .then((res) => {
            setData(res);
            setLoading(false);
        })
        .catch((err) => {
            setError("error");
            setLoading(false);
        });
    }, [country]);

    if(loading) return <h2>Loading...</h2>;
    if(error) return <h2>{error}</h2>;

    return (
        <div>
            <h2>{country} Universities</h2>
            {data.map((item, index) => (
                <Card key={index} item={item} />
            ))}
        </div>
            );
}

export default Universities;