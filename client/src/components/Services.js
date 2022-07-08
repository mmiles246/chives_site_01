import './Services.css';
import station from './imgs/station.png';
import Footer from './Footer';
import Booking from './Booking';

function Services () {
    return (
        <div className='services-page'>
            <div >
                <div className='services-banner'>
                </div>
                <div className='services-container'>
                    <div className='service-row'>
                        <h3>Color</h3>
                        <ul>
                            <li>Color Service</li>
                            <li>Color Service</li>
                            <li>Color Service</li>
                        </ul>
                        <ul>
                            <li>Color Service</li>
                            <li>Color Service</li>
                        </ul>
                    </div>
                    <div className='service-row'>
                        <h3>Cut</h3>
                        <ul>
                            <li>Cut Service</li>
                            <li>Cut Service</li>
                            <li>Cut Service</li>
                        </ul>
                    </div>
                    <div className='service-row'>
                        <h3>Styling</h3>
                        <ul>
                            <li>Styling Service</li>
                            <li>Styling Service</li>
                            <li>Styling Service</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Booking />
            <Footer />
        </div>
    )
}

export default Services;