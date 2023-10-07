/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Service = ({ ServiceData }) => {
    console.log(ServiceData)
    const { serviceName, img, description,id } = ServiceData
    return (
        <div className="md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 mt-4 md:mt-0">
            <div className="card card-compact w-72 md:w-[350px] h-96 lg:h-[400px] lg:w-[430px] bg-base-100 shadow-xl">
                <figure><img className="w-full h-[256px]" src={img} alt="Service Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title w-fit  text-blue-600 text-lg font-bold">{serviceName}</h2>
                    <p>{description.slice(0, 130)}....</p>
                    <div className="card-actions justify-start">
                        <Link to={`/services/${id}`} ><button className="w-fit px-4 py-2 rounded-lg btn-primary font-semibold">DETAILS</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;