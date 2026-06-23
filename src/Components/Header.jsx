import profile from "../assets/profile.png";

function Header() {
    return (
        <>
            <header>
                <nav>
                    <div className="nav-img"><img src={profile} alt="Profile image" /></div>
                    <div className="nav-text">
                        <div className="nav-main-text">
                            <h1>Ayush Pundir</h1>
                            <h2>Full-Stack Developer</h2>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header