import img from '../assets/image.jpg'
import mail from '../assets/email.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

function Header() {
    return (
        <div className="header-container">
            <img src={img} className="header-img" alt="portfolio picture" />
            <div className="header-info">
                <h1 className="header-intro">Hi! I'm Tinay</h1>
                <div className="header-line"></div>
                <h3 className="header-name">Ma. Christina J. Galvez</h3>
                <p className="header-position">Aspiring Software Developer</p>

                <div className="button-container">
                    <a href="mailto:galvez.mcj@gmail.com"><img src={mail} className="header-btn" alt="email" /></a>
                    <a href="https://github.com/galvez-mcj" target="_blank"><img src={github} className="header-btn" alt="github" /></a>
                    <a href="https://www.linkedin.com/in/galvez-mcj/"><img src={linkedin} className="header-btn" alt="linkedin" /></a>
                </div>
            </div>


        </div>
    )

}

export default Header