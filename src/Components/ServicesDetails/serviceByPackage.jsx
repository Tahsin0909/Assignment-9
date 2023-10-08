/* eslint-disable react/prop-types */


const ServiceByPackage = ({facilitiesData}) => {
    // console.log(facilitiesData)
    return (
        <div className="p-0">
            <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            ></path>
                        </svg>
                    </span>
                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        {facilitiesData}
                    </p>
                </li>
            </ul>
        </div>
    )
};

export default ServiceByPackage;