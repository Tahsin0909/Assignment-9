/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ServiceByPackage from "./serviceByPackage";

const Packages = ({ PackageData }) => {
    // console.log(PackageData)
    const { packageName, description, price, includedServices } = PackageData

    return (
        <div>
            <div className="relative flex w-full max-w-[25rem] h-[580px] flex-col rounded-xl bg-gradient-to-tr from-blue-600 to-pink-600 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center  shadow-none">
                    <p className="block font-sans text-2xl  font-semibold uppercase leading-normal text-white antialiased ">
                        {packageName}
                    </p>
                    <h1 className="mt-6  font-sans text-2xl font-normal tracking-normal text-white antialiased">
                        {price}
                    </h1>
                    <div className="mt-2 ">
                        <p>{description}</p>
                    </div>
                </div>

                <div className="flex-grow">
                    {
                        includedServices.map(facilities => <ServiceByPackage facilitiesData={facilities} key={`id$`}></ServiceByPackage>)
                    }
                </div>
                <div className="mt-12 p-0">
                    <button
                        className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Packages;