import { useGlobalContext } from "./context";
import { motion } from "framer-motion";

const Modal = () => {
    const { setModal } = useGlobalContext();

    const closeModal = () => setModal(false);

    return (
        <motion.div
            className="modal-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className="modal-overlay" onClick={closeModal}>
                <motion.div
                    className="modal-content"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h1>Modal</h1>
                    <button onClick={closeModal}>Close Modal</button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Modal;
