import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub} from "@fortawesome/free-brands-svg-icons";


function FooterComponent() {
    return (
        <footer className="footer">
            <div className="socials">
                <a href='https://www.linkedin.com/in/olamide-akinniyi-10420b187' target='_blank' rel="noreferrer"><FontAwesomeIcon className='footer-icon' icon={faLinkedin} size= "2x"/></a>
                <a href='https://twitter.com/Akin_Olamideart?t=NDK8imDSKXezBd8Td8poZQ&s=09' target='_blank' rel="noreferrer"><FontAwesomeIcon className='footer-icon' icon={faTwitter} size= "2x"/></a>
                <a href='https://github.com/Olamide-Bello' target='_blank' rel="noreferrer"><FontAwesomeIcon className='footer-icon' icon={faGithub} size= "2x"/></a>
            </div>
            <div><p>Copyright &copy; 2022 Made with 💖 by Bello Olamide Akinniyi</p></div>
        </footer>
    )
}


export default FooterComponent