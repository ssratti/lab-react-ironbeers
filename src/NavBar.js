import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
            <nav>
                <Link to="/"><h1>Home</h1></Link>
            </nav>

        </div>
    );
}

export default NavBar;