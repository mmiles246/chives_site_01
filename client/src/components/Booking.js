import './Booking.css';

function Booking () {

    return (
        <div className='booking-container'>
            <div className='booking-text'>
                <h1>Booking</h1>
                <p>Currently all traditional cuts and color services must be scheduled directly throught Salon Jador.</p>
                <h4>Appointment Policies</h4>
                <p className='app-policy'>All appointments must be booked at least a full 24 hours before the schduled appointment time. Any appointments canceled within 24 hours of scheduled time are subject to a 100% charge of scheduled sercvices.</p>
                <p className='fine-print'>We reserve the right to cancel any appointment at the discretion of either the stylist or the Salon.</p>
            </div>
        </div>
    )

}

export default Booking;