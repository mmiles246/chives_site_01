import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import sinks from './imgs/sinks.png';
import scissors from './imgs/scissors.png';
import interior from './imgs/interior.png';
import Footer from './Footer';

function Home () {

    return (
        <div>
            <div className='home-page'>
                <Carousel fade>
                    <Carousel.Item className='carousel-item'>
                        <img
                        className="d-block w-100"
                        src={sinks}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item'>
                        <img
                        className="d-block w-100"
                        src={scissors}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item'>
                        <img
                        className="d-block w-100"
                        src={interior}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Footer />
        </div>
    )
}

export default Home;