import { useAppContext } from "./context";
import { links, social } from "./data";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useAppContext();
    return (
        <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
            <div className="sidebar-header">
                <img src={logo} alt="coding addict" className="logo" />
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {links.map(({ id, url, text, icon }) => {
                    return (
                        <li key={id} className="sidebar-link">
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="social-links">
                {links.map(({ id, url, icon }) => {
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};
export default Sidebar;
