import './Services.css';
import station from './imgs/station.png';

function Services () {
    return (
        <div className="services-page">
            <div className='services-container'>
                <h1>Services</h1>
                <p>Long blurb of random words describing services that can be offered to clients and explaining how pricing varies between each client and that the prices on services provided below are just estimates and should be treated as such and can even be assumed that the prices presented below represent the lowest possible price for each given service.</p>
                <br></br>
                <div className='service-list-left'>
                    <h3 className='service-title-left'>Color</h3>
                    <ul className='service-deets-left'>
                        <li>Color touch ups</li>
                        <li>more deets</li>
                        <li>even more deets</li>
                    </ul>
                    <h3 className='service-title-left'>Another Service</h3>
                    <ul className='service-deets-left'>
                        <li>Color touch ups</li>
                        <li>more deets</li>
                        <li>even more deets</li>
                    </ul>
                </div>
                <div className='service-list-right'>
                    <h3 className='service-title-right'>Cuts</h3>
                    <ul className='service-deets-right'>
                        <li>Description of things about the service here</li>
                        <li>more deets</li>
                        <li>even more deets</li>
                    </ul>
                    <h3 className='service-title-left'>Even More Services</h3>
                    <ul className='service-deets-left'>
                        <li>Color touch ups</li>
                        <li>more deets</li>
                        <li>even more deets</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;