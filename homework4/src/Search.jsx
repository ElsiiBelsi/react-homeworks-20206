import {useState}   from 'react'
import {useNavigate} from 'react-router-dom'

function Search() {
    const [country, setCountry] = useState('');
    const navigate = useNavigate();

    function goSearch() {
        if(!country) return;

        navigate ("/universities/" + country);
    }

    return (
        <div>
            <input
            placeholder='Enter country name'
            value = {country}
            onChange = {(e)  => setCountry(e.target.value)}
            />
            <button onClick={goSearch}>Search</button>
        </div>
    );
    
}

export default Search;