import React from 'react';
import { Link } from 'react-router-dom';
import Beer from './beers.png';
import NewBeer from './new-beer.png';
import RandomBeer from './random-beer.png';


function Home(props) {
    return (
        <div>
            <div>
                <img src={Beer} />
                <Link to="/allbeers"><h1>All Beers</h1></Link>
                <p>
                    Vel pretium lectus quam id leo in vitae. Venenatis a condimentum vitae sapien. Commodo nulla facilisi nullam vehicula ipsum. Imperdiet dui accumsan sit amet. Tempus urna et pharetra pharetra massa massa.
                </p>
            </div>
            <div>
                <img src={RandomBeer} />
                <Link to="/randombeers"><h1>Random Beer</h1></Link>
                <p>
                    Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Aliquam vestibulum morbi blandit cursus risus at. Purus gravida quis blandit turpis cursus in hac. Massa tincidunt nunc pulvinar sapien et.
                </p>
            </div>
            <div>
                <img src={NewBeer} />
                <Link to="/newbeer"><h1>New Beer</h1></Link>
                <p>
                    Turpis massa sed elementum tempus egestas. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Vivamus at augue eget arcu dictum varius. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum.
                </p>
            </div>
        </div>
    );
}

export default Home;