import { useGlobalContext } from "./context";

const Modal = () => {
    const { setModal } = useGlobalContext();
    return (
        <div className="modal-container">
            <div className="modal-content">
                <h1>Modal</h1>
                <button
                    onClick={() => {
                        setModal(false);
                    }}
                >
                    Close Modal
                </button>
            </div>
        </div>
    );
};

export default Modal;
