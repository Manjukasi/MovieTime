import {Link} from "react-router-dom"

const Title = () => {
    return (
        <a href="/"
        className="logo">
            <img
            alt = "logo" 
            src="https://w7.pngwing.com/pngs/725/684/png-transparent-movie-time-graphic-film-cinema-logo-film-elements-cdr-food-text.png">
           </img>
        </a>
    )
}


const Header = () => {
    return (
        <div className="header">
        <Title />
        <div className="nav-items">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>TV</li>
            <li>Movies</li>
            <li><Link to = "/about">Contact Us</Link></li>
        </ul>
        </div>
        </div>
    )
}

export default Header;