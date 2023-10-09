
import AlbumData from '../../../public/Album.json'
import { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../ContextApi/ContextApi";
import 'react-toastify/dist/ReactToastify.css';
const Album = () => {
    const photos = AlbumData
    // console.log(photos)
    const { user } = useContext(AuthContext)
    const willShowToastRaw = localStorage.getItem('ShowToast')
    const willShowToast = JSON.parse(willShowToastRaw)
    // console.log(JSON.parse(willShowToast))
    useEffect(() => {
        if (willShowToast == "false") {
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
    return (
        <div className='relative top-28 mb-40 md:mx-6  lg:mx-14'>
            <h1 className='text-center text-4xl mb-4 font-semibold text-blue-600'>Moments in Time: Our Photo Collection</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    photos.map(data =>
                        <img className='w-[350px] h-[250px] rounded-lg shadow-md
                        md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300' key={data.id} src={data.url} alt='Our Album'></img>)
                }
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

export default Album;