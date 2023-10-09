
import { useContext, useEffect } from "react";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../ContextApi/ContextApi";
import { ToastContainer, toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import PopularEvent from "../Popular Event/popularEvent";
import Clients from "../Valuable_Clients/Clients";


const NewHome = () => {
    const ServicesData = useLoaderData()
    console.log(ServicesData)
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
            <Slider></Slider>
            <Services ></Services>
            <PopularEvent></PopularEvent>
            <Clients></Clients>
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

export default NewHome;