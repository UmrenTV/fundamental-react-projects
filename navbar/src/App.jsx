import { useState, useEffect } from "react";
import { links } from "./data";
import { FaHamburger } from "react-icons/fa";

const App = () => {
    const [pathname, setPathname] = useState(window.location.pathname);
    const [toggleMenu, setToggleMenu] = useState(true);
    useEffect(() => {
        setPathname(window.location.pathname);
    });

    console.log(links);
    return (
        <nav className="nav-main">
            <div className="nav-toggle">
                <FaHamburger
                    className="hamburger"
                    onClick={() => {
                        setToggleMenu(!toggleMenu);
                    }}
                />
            </div>
            {toggleMenu && (
                <div className="nav-container">
                    {links.map(({ id, url, text }) => {
                        return (
                            <a
                                href={url}
                                key={id}
                                className={`nav-link ${pathname === url ? "active" : ""}`}
                            >
                                {text}
                            </a>
                        );
                    })}
                </div>
            )}
        </nav>
    );
};
export default App;
