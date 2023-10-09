/* eslint-disable react/no-unescaped-entities */

const ContactUS = () => {
    return (
        <div className="relative top-28  md:top-32 mb-40 mx-8 lg:mx-20">
            <div className="flex flex-col md:flex-row  justify-center items-center gap-8">
                <div className="md:w-[70%]">
                    <div >
                        <h3 className="md:text-3xl text-xl font-bold text-blue-600 mb-8" >Reach Out to Us</h3>
                        <p>We value your feedback, questions, and inquiries. Whether you have a suggestion,
                            need assistance, or simply want to say hello, we're here to listen and assist you in any way
                            we can.Our dedicated customer support team is available during our business hours to address your concerns and provide assistance.
                            Please feel free to reach out to us through any of the contact methods listed above, and we will do our best to respond promptly.</p>

                    </div>
                    <div className="mt-4">
                        <h1 className="mb-2 font-semibold text-blue-600 text-lg">FInd Us On</h1>
                        <div className="flex flex-col" >
                            <div className="flex gap-1 border w-[250px] py-3 px-8 border-black rounded-t-lg hover:text-blue-600">
                                <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" />
                                <p>FaceBook</p>
                            </div>
                            <div className="flex w-[250px] gap-1 border-x border-black py-3 px-8 hover:text-pink-600">
                                <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" />
                                <p>InstaGram</p>
                            </div>
                            <div className="flex w-[250px] gap-1 border border-black rounded-b-lg py-3 px-8 hover:text-yellow-600 ">
                                <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/1383/1383266.png" alt="" />
                                <p>SnapChat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-400 p-8 rounded-lg">
                    <div>
                        <h3 className="font-semibold">Address:</h3>
                        <div>
                            <p>BLOCK-A,Road-20, House-18</p>
                            <p>Banani,Dhaka-1200</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h3 className="font-semibold">Email:</h3>
                        <p>tasfia@gmail.com</p>
                        <p>busy@officialy.com</p>
                    </div>
                    <hr />
                    <div>
                        <h3 className="font-semibold">Phone:</h3>
                        <p>013251625118</p>
                    </div>
                    <div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUS;