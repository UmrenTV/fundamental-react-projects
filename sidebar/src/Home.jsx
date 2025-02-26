import { useGlobalContext } from "./context";

const Home = () => {
    const { setModal } = useGlobalContext();
    const openModal = () => {
        setModal(true);
    };
    return (
        <div className="home-container">
            <h1>Home</h1>
            <button onClick={openModal}>Show Modal</button>
        </div>
    );
};

export default Home;
