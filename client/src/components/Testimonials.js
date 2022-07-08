import Footer from './Footer';
import './Testomonials.css';

function Testimonials () {

    return (
        <div>
            <div className='testomonial-page'>
                <div className='testomonial-container'>
                    <h1>Testimonials</h1>
                    <div className='testomonial-card'>
                        <p className='review'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <p className='by-line'>-Dr. Suess</p>
                    </div>
                    <div className='testomonial-card'>
                        <p className='review'>Tincidunt eget nullam non nisi. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Aliquet enim tortor at auctor. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.</p>
                        <p className='by-line'>-Annabelle</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Testimonials;