import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <h1><Link to='/'>Logo</Link></h1>
            <ul>
                <li>
                    <Link to ='/movie/now-playing'>Now playing</Link>
                </li>
                <li>
                    <Link to ='/movie/upcoming'>Upcoming Movies</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
