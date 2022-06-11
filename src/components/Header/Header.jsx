import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    let domainName = `${window.location.origin}`

    const NavRunner = (e) => {
        let NavRunner = document.querySelector(".header__navRunner")
        NavRunner.style.opacity = `1`

        if(e.target.href === `${domainName}/`){
            NavRunner.style.left = `calc(0*100px)`
        }
        else if(e.target.href === `${domainName}/gallery`){
            NavRunner.style.left = `calc(1*100px)`
        }
        else if(e.target.href === `${domainName}/video`){
            NavRunner.style.left = `calc(2*100px)`
        }
        else if(e.target.href === `${domainName}/contact`){
            NavRunner.style.left = `calc(3*100px)`
        }
        else {
            NavRunner.style.opacity = `0`
        }
    }

    const NavRunnerLogo = () => {
        let NavRunner = document.querySelector(".header__navRunner")
        NavRunner.style.opacity = `1`
        NavRunner.style.left = `calc(0*100px)`
    }

    const NavRunnerBook = () => {
        let NavRunner = document.querySelector(".header__navRunner")
        NavRunner.style.opacity = `0`
    }

    return (
        <header className='app__header'>
            <Link to="/" className="header__logo" onClick={NavRunnerLogo}>
                <div className="header__logoIcon">
                <span class="material-icons-outlined">videocam</span>
                </div>
                <div className="header__logoName">
                    <span>Raj Studio</span>
                    <span>Since 1964</span>
                </div>
            </Link>
            <div className="app__headerNav">
                <Link className="header__navBtn" onClick={NavRunner} id="home" to="/">HOME</Link>
                <Link className="header__navBtn" onClick={NavRunner} id="gallery" to="/gallery">GALLERY</Link>
                <Link className="header__navBtn" onClick={NavRunner} id="video" to="/video">VIDEO</Link>
                <Link className="header__navBtn" onClick={NavRunner} id="contact" to="/contact">CONTACT</Link>
                <div className="header__navRunner"></div>
            </div>
            <div className="app__headerBtn">
                <Link className="header__bookBtn" onClick={NavRunnerBook} id="book" to="/book">BOOK</Link>
            </div>
        </header>
    )
}

export default Header