import {Link, Outlet} from 'react-router-dom'
import {useState} from 'react';
import Button from './Button';
import './NavBar.css';


function NavBar () {
    const [clicked, setClicked]=useState(false);
    const [button, setButton]=useState(true);

    function showButton () {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='menu-icon'>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} onClick={e => {setClicked(!clicked)}} />
                </div>
                <ul className={clicked ? 'nav-menu-active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to={'/'} className='nav-links' onClick={e => setClicked(false)}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/'} className='nav-links' onClick={e => setClicked(false)} >Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/'} className='nav-links' onClick={e => setClicked(false)}>Testimonials</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/'} className='nav-links' onClick={e => setClicked(false)}>Contact</Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>Signup</Button>} */}
            </div>
            {/* <Outlet/> */}
        </nav>
        
    )
}

export default NavBar;