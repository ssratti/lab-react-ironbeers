import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'
import axios from "axios"
import { Link } from 'react-router-dom';

function AllBeers(props) {
    const [beers, setBeers] = useState([])
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                setBeers(response.data)
            })
    }, [])

    let newBeer = () => {
        return beers.map((beer, i) => {
            return (
                <Link key={i} to={`/beer/${beer._id}`}>
                    <div className="beerDiv">
                        <img className="beerpic" src={beer.image_url} />
                        <h2>{beer.name}</h2>
                        <div>
                            <p>{beer.tagline}</p>
                            <p>Contributed by: {beer.contributed_by}</p>
                        </div>

                    </div>

                </Link>


            )
        })
    }
    return (
        <div>
            <NavBar />

            {newBeer()}
        </div>
    );
}

export default AllBeers;