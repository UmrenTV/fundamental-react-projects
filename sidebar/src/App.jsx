import Home from "./Home";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

import { useGlobalContext } from "./context";

const App = () => {
    const { modal } = useGlobalContext();
    return (
        <main>
            <Sidebar />
            <Home />
            {modal && <Modal />}
        </main>
    );
};
export default App;
