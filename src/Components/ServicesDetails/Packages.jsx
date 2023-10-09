/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ServiceByPackage from "./serviceByPackage";

const Packages = ({ PackageData }) => {
    // console.log(PackageData)
    const { packageName, description, price, includedServices, id } = PackageData

    return (
        <div>
            <div
                className={`relative flex  max-w-[25rem] lg:h-[580px] flex-col rounded-xl bg-gradient-to-tr ${id == 1 ? "from-[#aeaeae] to-[#767272]" : id == 2 ? "from-[#ffe348] to-[#FFA500]" : id == 3 ? "from-blue-900 to-zinc-900" : `bg-red-400`}  bg-clip-border p-8 text-white shadow-md shadow-pink-500/40`}>
                <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center  shadow-none">
                    <p className="block font-sans text-xl md:text-2xl  font-semibold uppercase leading-normal text-white antialiased ">
                        {packageName}
                    </p>
                    <h1 className="mt-6  font-sans text-2xl font-normal tracking-normal text-white antialiased">
                        {price}
                    </h1>
                    <div className="mt-2 text-sm md:text-base">
                        <p>{description}</p>
                    </div>
                </div>

                <div className="flex-grow">
                    {
                        includedServices.map(facilities => <ServiceByPackage facilitiesData={facilities} key={facilities}></ServiceByPackage>)
                    }
                </div>
                <div className="mt-12 p-0">
                    <button className={`btn  w-full ${id == 1 ? "bg-[#333] text-white" : id == 2 ? "bg-[#e3b241] text-white" : id == 3 ? "bg-white" : `bg-red-400`}`}>Book Now</button>
                </div>
            </div>
        </div >
    );
};

export default Packages;