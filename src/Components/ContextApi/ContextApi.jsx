/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext()
const ContextApi = ({ children }) => {

    const [sliderData, setSliderData] = useState([])
    useEffect(() => {
        fetch('./Slider.json')
            .then(res => res.json())
            .then(Slider => setSliderData(Slider))
    }, [])

    const Data = {
        sliderData
    }
    return (
        <AuthContext.Provider value={Data}>
            {children}
        </AuthContext.Provider>
    )
};

export {AuthContext, ContextApi};