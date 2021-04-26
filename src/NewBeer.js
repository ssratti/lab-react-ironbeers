import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from "axios"

function NewBeer(props) {
    const [newBeer, setNewBeer] = useState({})

    function handleChange(e) {
        e.persist()
        newBeer[e.target.name] = e.target.value
        setNewBeer(newBeer)
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
    }


    return (
        <div>
            <NavBar />
            <div className="newbeer">
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={handleChange} />
                    <label>Tagline:</label>
                    <input type="text" name="tagline" onChange={handleChange} />
                    <label>Description:</label>
                    <input type="text" name="description" onChange={handleChange} />
                    <label>First Brewed:</label>
                    <input type="text" name="firstBrewed" onChange={handleChange} />
                    <label>Brewers Tips:</label>
                    <input type="text" name="brewersTips" onChange={handleChange} />
                    <label>Attenuation Level:</label>
                    <input type="text" name="attenuationLevel" onChange={handleChange} />
                    <label>Contributed By:</label>
                    <input type="text" name="contributedBy" onChange={handleChange} />
                    <div>
                        <button typ="submit" value="Submit">Add New</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default NewBeer;