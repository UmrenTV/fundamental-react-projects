import { useGlobalContext } from "./context";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = () => {
    const { modal, setModal } = useGlobalContext();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (modal) {
            setIsVisible(true);
        }
    }, [modal]);
    const closeModal = () => {
        setIsVisible(false);
        setTimeout(() => {
            setModal(false);
        }, 200);
    };
    return (
        <AnimatePresence>
            {modal && isVisible && (
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
            )}
        </AnimatePresence>
    );
};

export default Modal;
