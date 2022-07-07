import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import sinks from './imgs/sinks.png';
import scissors from './imgs/scissors.png';
import interior from './imgs/interior.png';
import Footer from './Footer';
import Bio from './Bio';

function Home () {

    return (
        <div className='home--primary'>
            <div className='home-page'>
                <div className='title'>
                    <h1>Ash Hans Hair</h1>
                </div>
                <Carousel className='carousel' fade>
                    <Carousel.Item className='carousel-item'>
                        <img
                        className="d-block w-100"
                        src={sinks}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item'>
                        <img
                        className="d-block w-100"
                        src={scissors}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item'>
                        <img
                        className="d-block w-100"
                        src={interior}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Bio />
            <Footer />
        </div>
    )
}

export default Home;