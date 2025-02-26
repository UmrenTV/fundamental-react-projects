import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";

const Sidebar = () => {
    const { sidebar, setSidebar } = useGlobalContext();
    console.log(links);
    return (
        <div className={`sidebar-container ${sidebar && "active"}`}>
            <div className="sidebar-header">
                <h3 className={`sidebar-logo ${sidebar && "active"}`}>LOGO</h3>
                <FaBars
                    className={`burger-icon ${sidebar && "active"}`}
                    onClick={() => {
                        setSidebar(!sidebar);
                    }}
                />
            </div>
            <div className="sidebar-content">
                <ul className="sidebar-links">
                    {links.map(({ id, url, text, icon }) => {
                        return (
                            <li key={id} className={`sidebar-link`}>
                                <a href={url}>
                                    <span className="sidebar-link-icon">
                                        {icon}
                                    </span>
                                    <span
                                        className={`sidebar-link-text ${sidebar && "active"}`}
                                    >
                                        {text}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <ul className={`social-links ${sidebar && "active"}`}>
                    {social.map(({ id, url, icon }) => {
                        return (
                            <li key={id} className="social-link">
                                <a href={url} target="_blank">
                                    <span className="social-link-icon">
                                        {icon}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
