import ScrollReveal from 'scrollreveal'

import Welcome from './Welcome'
import Latest from './Latest'
import About from './About'

import './assets/Home.css'
import './assets/Welcome.css'
import './assets/Latest.css'
import './assets/Section.css'

const Home = () => {

    ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 2000,
        reset: true
    }).reveal('.section__cardWrapper')

    return(
        <>
            <Welcome />
            <Latest />
            <Latest />
            <Latest />
            <Latest />
            <Latest />
            <About />
        </>
    )
}

export default Home