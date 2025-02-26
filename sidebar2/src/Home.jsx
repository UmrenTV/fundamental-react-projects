import { useAppContext } from "./context";
import { FaBars } from "react-icons/fa";

const Home = () => {
    const { openSidebar, openModal } = useAppContext();

    return (
        <main>
            <button onClick={openSidebar} className="sidebar-toggle">
                <FaBars />
            </button>
            <button onClick={openModal} className="btn">
                Open Modal
            </button>
        </main>
    );
};
export default Home;
