import { useContext, createContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [modal, setModal] = useState(false);

    return (
        <GlobalContext.Provider
            value={{ sidebar, setSidebar, modal, setModal }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default AppContext;
