import './404.scss'

import { Link } from "react-router-dom"
import ironman from "../../resurses/img/iron-man.jpg"

const Page404 = () => {
    
    return (
        <div className="page404">
            <div className="page404__wrapper">
                <div className="page404__descr">404 PAGE NOT FOUND</div>
                <div className="page404__text">Protocol missing... Exiting program...</div>
                <div className="page404__done">Check that you typed the address correctly, go back to your previous page.</div>
                <Link to="/" className="page404__back">Back to main page</Link>
            </div>
            <img src={ironman} alt="iron man" className="page404__img"/>
        </div>
    )
}


export default Page404;