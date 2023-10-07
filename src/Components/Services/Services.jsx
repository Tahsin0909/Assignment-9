import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import Service from "./Service";

const Services = () => {
    const { ServicesData } = useContext(AuthContext)
    console.log(ServicesData)
    return (
        <div className="md:mt-12 mt-4 ">
            <h1 className="md:text-4xl text-2xl text-center font-semibold">Our Services</h1>
            <h3 className="md:text-xl text-sm text-center md:mt-2 text-gray-300">Bringing People Together, One Event at a Time</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 md:mt-8 mt-2 gap-4 mx-4 lg:gap-10">
                {
                    ServicesData.map(ServiceData => <Service key={ServiceData.id} ServiceData={ServiceData} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;