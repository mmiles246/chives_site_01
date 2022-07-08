import './Footer.css';

function Footer () {

    return (
        <div className='footer-container'>
            <div className='footer-deets'>
                (555)-555-5555
            </div>
            <div className='foot-icons'>
                <a href="https://www.instagram.com/ashhanz_/">
                    <i class="fa-brands fa-instagram fa-2xl"></i>
                </a>
                <a href="mailto:ashley.hanson45@gmail.com">
                    <i class="fa-regular fa-envelope fa-2xl"></i>
                </a>
            </div>
            <div className='designer-tag'>
                Designed by Michael Miles
            </div>
        </div>
    )

}

export default Footer;