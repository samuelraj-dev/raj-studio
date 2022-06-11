import Img2 from '../Home/assets/HeaderSlideShow/2.jpg'

import './assets/Gallery.css'

const Gallery = () => {
    return (
        <>
            <div></div>
            <div className="galleryWrapper">
                <div className="galleryCard">
                    <div className="gallery__cardImg">
                        <img src={Img2} />
                    </div>
                    <div className="gallery__cardDetails">
                        <div className="gallery__cardDetailsDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, fugiat!</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery