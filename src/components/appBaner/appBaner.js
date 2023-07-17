import './appBaner.scss'

import avangers from '../../resurses/img/Avengers.png';
import avangersLogo from '../../resurses/img/Avengers-logo.png'

const AppBaner = () => {
    return (
        <div className="appBaner">
            <img src={avangers} alt="avangers" />
            <div className="appBaner__text">
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src={avangersLogo} alt="avangers logo" />
        </div>
    )
}

export default AppBaner;
