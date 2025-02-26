import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
    const { sidebar, setSidebar } = useGlobalContext();
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
        </div>
    );
};

export default Sidebar;
