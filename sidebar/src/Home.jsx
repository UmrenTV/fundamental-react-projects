import { useGlobalContext } from "./context";

const Home = () => {
    const { setModal } = useGlobalContext();
    const showModal = () => {
        setModal(true);
    };
    return (
        <div className="home-container">
            <h1>Home</h1>
            <button onClick={showModal}>Show Modal</button>
        </div>
    );
};

export default Home;
