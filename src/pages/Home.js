import React from 'react'
import {Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='homePage'>
            <Container>
                <div className = 'frontTitle anton'>Get the latest box office update </div>
                <Button className='buttonHome'><Link to='/movie/now-playing' className='link-button'>Lets get started</Link></Button>
            </Container>
        </div>
    )
}

export default Home
