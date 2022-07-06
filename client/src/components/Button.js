import { Link } from 'react-router-dom';
import './Button.css'; 

const STYLES = ['bttn--primary', 'bttn--outline'];
const SIZES = ['bttn--medium', 'bttn--large'];
function Button ({children, buttonSize, buttonStyle}) {
    const checkBttnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkBttnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];
    return(
        <Link to={'/'} className='btn=mobile'>
            <button className={`btn ${checkBttnStyle} ${checkBttnSize}`} type='type'>
                {children}
            </button>
        </Link>
    )
}

export default Button;