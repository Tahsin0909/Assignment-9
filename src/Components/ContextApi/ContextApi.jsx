/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext()
const ContextApi = ({ children }) => {

    const [ServicesData, setServicesData] = useState([])
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])

    const Data = {
        ServicesData
    }
    return (
        <AuthContext.Provider value={Data}>
            {children}
        </AuthContext.Provider>
    )
};

export {AuthContext, ContextApi};