import './Footer.css';

import phone from '../../Images/Footer/phone.svg'
import mail from '../../Images/Footer/mail.svg'
import linkedin from '../../Images/Footer/linkedin.svg'


function Footer({isDark}) {
    return (
        <div className='footer'>
            <div>
                <img src={phone} alt="Phone: " className={isDark === true ? "footer-light" : ""} />
                <p>0670 524 0500</p>
            </div>

            <div>
                <img src={mail} alt="Email: " className={isDark === true ? "footer-light" : ""} />
                <p>deszabolcs8@gmail.com</p>
            </div>

            <div>
                <img src={linkedin} alt="Linkedin: " className={isDark === true ? "footer-light" : ""} />
                <p onClick={() => window.open('https://www.linkedin.com/in/szabolcs-ducza-089a2a300/', '_blank')} className='link'>Ducza Szabolcs</p>

            </div>

        </div>
    )
}

export default Footer