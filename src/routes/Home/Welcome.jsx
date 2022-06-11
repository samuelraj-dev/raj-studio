import { Link } from 'react-router-dom';

import SlideShowOne from './assets/HeaderSlideShow/1.jpg'

const Welcome = () => {
    return(
        <section id='welcome'>
            <div className="section__content">                
                <div className="sec__div">
                    <div className="welcome__title">
                        <h2>RAJ STUDIO</h2>
                        <h2>Capturing the moments as it unfolds.</h2> 
                    </div>
                    <div className="welcome__info">
                        <p>WEDDING, PRE-WEDDING, ENGAGEMENT, BABY SHOWER, BABY SHOOT, EAR BORING, PUBERTY SHOOT, HOUSE WARMING, CORPORATE EVENTS</p>
                    </div>
                    <div className="welcome__bookBtnWrap">
                        <Link className='welcome__bookBtn' to="/book">BOOK</Link>
                    </div>
                </div>
                <div className="sec__div">
                    <div className="welcome__slideShow">
                        <img src={SlideShowOne} alt="" />
                    </div>    
                </div>
            </div>
        </section>
    )
}

export default Welcome