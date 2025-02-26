import { useGlobalContext } from "./context";
import { motion } from "framer-motion";

const Modal = () => {
    const { setModal } = useGlobalContext();

    const closeModal = () => setModal(false);
    const animationDuration = 0.2;
    const scaleAnimationAmount = 0.7;

    return (
        <motion.div
            className="modal-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animationDuration }}
        >
            <div className="modal-overlay" onClick={closeModal}>
                <motion.div
                    className="modal-content"
                    initial={{ scale: scaleAnimationAmount }}
                    animate={{ scale: 1 }}
                    exit={{ scale: scaleAnimationAmount }}
                    transition={{ duration: animationDuration }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h1>Modal</h1>
                    <button className="btn" onClick={closeModal}>
                        Close Modal
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Modal;
