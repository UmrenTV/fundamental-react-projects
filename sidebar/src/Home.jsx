import { useGlobalContext } from "./context";

const Home = () => {
    const { setModal } = useGlobalContext();
    const openModal = () => {
        setModal(true);
    };
    return (
        <div className="home-container">
            <button className="btn" onClick={openModal}>
                Show Modal
            </button>
        </div>
    );
};

export default Home;
