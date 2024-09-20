import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
// import { Dayjs } from "dayjs";

const ContextProvider = ({ children }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <GlobalContext.Provider value={{ isOpen, setOpen }}>
            {children}
        </GlobalContext.Provider>

    )
}

export default ContextProvider;