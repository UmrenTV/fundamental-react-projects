import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isModalOpen,
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                openModal,
                closeModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
