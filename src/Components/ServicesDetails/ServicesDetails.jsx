/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import { useParams } from "react-router-dom";
import Packages from "./Packages";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const ServicesDetails = () => {
    const { ServicesData } = useContext(AuthContext)
    // console.log(ServicesData)
    const Id = useParams()
    // console.log(Id)

    const DetailsData = ServicesData.find(newData => newData.id === parseInt(Id.id))
    // console.log(DetailsData)
    const { serviceName, description, img1, img2, img3, img4, packages } = DetailsData

    // For Showing Toast On Auth
    const { user } = useContext(AuthContext)
    const willShowToastRaw = localStorage.getItem('ShowToast')
    const willShowToast = JSON.parse(willShowToastRaw)
    // console.log(JSON.parse(willShowToast))
    useEffect(() => {
        if (willShowToast == "false") {
            console.log('Toast dekhaw')
            const demo = user.email
            toast.info(`Authenticating As ${demo}`, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            localStorage.setItem('ShowToast', JSON.stringify('True'))
        }
    }, [willShowToast, user.email])
    // For Showing Toast On Auth

    return (
        <div>
            <div className="relative md:top-32 md:mb-[200px]">
                <div className="flex lg:justify-center lg:items-center lg:gap-8 lg:mx-24">
                    <div className="lg:w-[700px]">
                        <h1 className="text-4xl font-semibold mb-4 text-blue-600">{serviceName}</h1>
                        <p className="text-xl p-2">{description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img className="lg:w-72 lg:h-56 md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 rounded-lg" src={img1} alt="" />
                        <img className="lg:w-72 lg:h-56 md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 rounded-lg" src={img2} alt="" />
                        <img className="lg:w-72 lg:h-56 md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 rounded-lg" src={img3} alt="" />
                        <img className="lg:w-72 lg:h-56 md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 rounded-lg" src={img4} alt="" />
                    </div>
                </div>
                <div className="flex flex-row flex-grow gap-4 mt-14 justify-center">
                    {
                        packages.map(packageData => <Packages key={`id$`} PackageData={packageData} ></Packages>)
                    }
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default ServicesDetails;