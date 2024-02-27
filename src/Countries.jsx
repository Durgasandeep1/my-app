import React from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

function Countries() {
    var [countries, setcountries] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            setcountries(res.data);
        });
    }, []);

    console.log(countries);

    return (
        <div className='d-flex w-75'>
            <ul>
                {countries.map((country) => (
                    <li key={country.name.common}>
                        <Link to={`details/${country.name.common}`}>
                            {country.name.common}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='w-25'>
                <Outlet />
            </div>
        </div>
    );
}

export default Countries;
