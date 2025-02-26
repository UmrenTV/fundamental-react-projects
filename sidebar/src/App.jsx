import Home from "./Home";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import { useGlobalContext } from "./context";
import { AnimatePresence } from "framer-motion";

const App = () => {
    const { modal, setModal } = useGlobalContext();

    return (
        <main>
            <Sidebar />
            <Home />
            <AnimatePresence onExitComplete={() => setModal(false)}>
                {modal && <Modal />}
            </AnimatePresence>
        </main>
    );
};
export default App;
