/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChoseUS = () => {
    AOS.init({
        duration:1200
    })
    return (
        <div className="lg:mx-20 mx-4 mb-8">
            <h1 className="text-center text-2xl font-bold">Why Chose Us?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div data-aos="fade-right" className="border-2 border-blue-700 md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 shadow-lg p-4 rounded-lg">
                    <h3 className="font-semibold text-lg text-blue-600">Exceptional Event Planning:</h3>
                    <p className="text-gray-400">Our experienced team of event planners is dedicated to turning your vision into a reality. From small gatherings
                        to grand celebrations, we meticulously plan every detail to ensure your event is a resounding success.</p>
                </div>
                <div data-aos="fade-left" className="border-2 border-blue-700 md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 shadow-lg p-4 rounded-lg text-blue-600">
                    <h3 className="font-semibold md:text-right text-lg text-blue-600">Attention to Detail:</h3>
                    <p className="text-gray-400 md:text-right">We believe that it's the little details that make a big difference. Our team pays
                        meticulous attention to every aspect of your event, ensuring that nothing is overlooked..</p>
                </div>
                <div data-aos="fade-right" className="border-2 border-blue-700 md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 shadow-lg p-4 rounded-lg text-blue-600">
                    <h3 className="font-semibold  text-lg text-blue-600">Professional Vendors:</h3>
                    <p className="text-gray-400"> We have a network of trusted vendors and suppliers who are experts in their respective fields.
                        From catering to entertainment, we work with the best to guarantee top-notch quality for your event..</p>
                </div>
                <div data-aos="fade-left" className="border-2 border-blue-700 md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300 shadow-lg p-4 rounded-lg text-blue-600">
                    <h3 className="font-semibold md:text-right text-lg text-blue-600">Budget-Friendly Options:</h3>
                    <p className="text-gray-400 md:text-right">We offer a range of packages to suit different budgets. Our goal is
                        to deliver exceptional value without compromising on quality, making your dream event accessible to all..</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoseUS;