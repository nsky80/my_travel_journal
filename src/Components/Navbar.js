
export default function Navbar() {
    return (
        <nav>
            <div className="nav--centered">
                <a href="/">
                <ul><li><img src="./images/nav-icon.png" className="nav--logo" alt="logo" /></li>
                    <li>
                        <h3 className="nav--text">My Travel Journal.</h3>
                    </li>
                </ul>
                </a>
            </div>
        </nav>
    )
}