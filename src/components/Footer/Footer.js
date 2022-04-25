import "./Footer.css"

const Footer = () => {
    return (
        <footer className=" navbar-expand-lg navbar-dark bg-dark">
            <div className="div-fot">
                <ul className="navbar-nav">
                    <li className="nav-item li-fot">
                        <a className="nav-link a-fot" aria-current="page" href="https://www.facebook.com">
                            <img src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/16/Facebook-icon.png"></img>
                        </a>
                    </li>
                    <li className="nav-item li-fot">
                        <a className="nav-link a-fot" href="https://www.twitter.com">
                            <img src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/16/Twitter-icon.png"></img>
                        </a>
                    </li>
                    <li className="nav-item li-fot">
                        <a className="nav-link a-fot" href="https://www.instagram.com">
                            <img src="https://icons.iconarchive.com/icons/designbolts/free-instagram/16/Active-Instagram-3-icon.png"></img>
                        </a>
                    </li>
                    <li className="nav-item li-fot">
                        <a className="nav-link a-fot" href="https://www.whatsapp.com">
                            <img src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/16/Whatsapp-icon.png"></img>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer