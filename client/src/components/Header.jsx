import Navigation from "./Navigation";

export default function Header() {

    return (
        <header className="header">
            <div className="header-text">
                <h1 className="header-name">Kris <span className="Kurzawa">Kurzawa </span></h1>
                <h2 className="header-title">Full-Stack Developer</h2>
            </div>
            <Navigation />
        </header>
    );
}

