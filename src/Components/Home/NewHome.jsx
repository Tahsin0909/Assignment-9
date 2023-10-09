
import { useContext, useEffect } from "react";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../ContextApi/ContextApi";
import { ToastContainer, toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import PopularEvent from "../Popular Event/popularEvent";
import Clients from "../Valuable_Clients/Clients";
import WhyChoseUS from "../WhyChooseUs/WhyChoseUS";
import Aos from "aos";


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
    Aos.init({
        duration:1200
    })
    return (
        <div>
            <Slider></Slider>
            <Services data-aos="fade-up" ></Services>
            <PopularEvent></PopularEvent>
            <Clients></Clients>
            <WhyChoseUS></WhyChoseUS>
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