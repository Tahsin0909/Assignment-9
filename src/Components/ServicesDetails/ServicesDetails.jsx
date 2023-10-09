/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import { useParams } from "react-router-dom";
import Packages from "./Packages";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const ServicesDetails = () => {
    const { ServicesData, loading, user } = useContext(AuthContext)
    // console.log(ServicesData)
    const Id = useParams()
    // console.log(Id)


    // const DetailsData = ServicesData?.find(newData => newData.id === parseInt(Id.id))
    // // console.log(DetailsData)
    // const { serviceName, description, img1, img2, img3, img4, packages } = DetailsData

    // For Showing Toast On Auth
    const willShowToastRaw = localStorage.getItem('ShowToast')
    const willShowToast = JSON.parse(willShowToastRaw)
    // console.log(JSON.parse(willShowToast))
    useEffect(() => {
        if (willShowToast == "false") {
            // console.log('Toast dekhaw')
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

    const DetailsData = ServicesData?.find(newData => newData.id === parseInt(Id.id))
    const { serviceName, description, img1, img2, img3, img4, packages } = DetailsData
    return (
        <div>
            <div className="relative top-28 md:top-32 mb-36 md:mb-[200px] mx-4 md:mx-10 lg:mx-0">
                <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-8 lg:mx-24">
                    <div className="md:w-full lg:w-[700px]">
                        <h1 className="md:text-4xl text-2xl font-semibold mb-4 text-blue-600">{serviceName}</h1>
                        <p className="md:text-xl p-2">{description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4 lg:mt-0">
                        <img className="lg:w-72 lg:h-56 md:w-full md:h-48  md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 rounded-lg" src={img1} alt="" />
                        <img className="lg:w-72 lg:h-56 md:w-full md:h-48  md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 rounded-lg" src={img2} alt="" />
                        <img className="lg:w-72 lg:h-56 md:w-full md:h-48  md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 rounded-lg" src={img3} alt="" />
                        <img className="lg:w-72 lg:h-56 md:w-full md:h-48  md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 rounded-lg" src={img4} alt="" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row flex-grow gap-4 mt-14 items-center justify-center">
                    {
                        packages.map(packageData => <Packages key={packageData.id} PackageData={packageData} ></Packages>)
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