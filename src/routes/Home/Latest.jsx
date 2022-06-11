import Img2 from './assets/HeaderSlideShow/2.jpg'
import Img3 from './assets/HeaderSlideShow/3.jpg'
import Img4 from './assets/HeaderSlideShow/4.jpg'

const Latest = () => {
    return (
        <section>
            <div className="section__head"><h2>LATEST CLICKS & FILMS</h2></div>
            <div className="section__content">
                <div className="section__cardContentWrapper">
                    <div className="section__cardWrapper">
                        <div className="section__cardImg">
                            <img src={Img3} />
                        </div>
                        <div className="section__cardDetails">
                            <div className="section__cardDetailsDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, fugiat!</div>
                        </div>
                    </div>
                    <div className="section__cardWrapper">
                        <div className="section__cardImg">
                            <img src={Img2} />
                        </div>
                        <div className="section__cardDetails">
                            <div className="section__cardDetailsDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, fugiat!</div>
                        </div>
                    </div>
                    <div className="section__cardWrapper">
                        <div className="section__cardImg">
                            <img src={Img4} />
                        </div>
                        <div className="section__cardDetails">
                            <div className="section__cardDetailsDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, fugiat!</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Latest