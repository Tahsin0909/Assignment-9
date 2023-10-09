/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="relative lg:top-28 lg:mb-40 lg:mx-20 lg:pl-10">
            <img className="w-full" src="https://a.storyblok.com/f/42908/1200x601/399b368e9c/gc-team-images-1200px.jpg" alt="" />
            <div>
                <p className="lg:text-3xl font-semibold text-blue-600 lg:mt-4">Welcome to Elysian EventManagement Ltd. - Your Event Experience Architects</p>
                <p className="mt-2 px-4">At Elysian EventManagement Ltd. , our mission is simple: to craft unique, seamless, and joy-filled events that celebrate life's special moments. We believe that every occasion,
                    whether it's a wedding, birthday, anniversary, or any other social gathering, deserves the utmost care and attention to detail.</p>
            </div>
            <div>
                <p className="lg:text-3xl font-semibold text-blue-600 lg:mt-4" >Our Approach</p>
                <p className="mt-2 px-4">We believe that every event should reflect your unique personality and style. That's why we work closely with you to
                    understand your vision, preferences, and objectives. Whether it's a milestone birthday, a joyous wedding, a corporate soirée,
                    or any other special occasion, we tailor our services to your needs, ensuring a seamless and enjoyable journey from planning to execution.</p>
            </div>
            <div>
                <p className="lg:text-3xl font-semibold text-blue-600 lg:mt-4" >Our Commitment</p>
                <p className="mt-2 px-4">Our commitment extends beyond event planning; it's about building lasting relationships with our clients.
                    We are dedicated to making your special moments not only memorable but also enjoyable, allowing you to be a guest at your own event.</p>
            </div>
            <div>
                <p className="lg:text-3xl font-semibold text-blue-600 lg:mt-4" >Get in Touch</p>
                <p className="mt-2 px-4">Whether you're envisioning an intimate gathering or a grand celebration, we're here to make it extraordinary.
                    Let's collaborate, celebrate, and create moments that will be cherished for a lifetime.</p>
                <p className="mt-4"><Link className="text-blue-400 font-semibold hover:underline">Contact Us</Link> to discuss your upcoming event, and let's embark on this exciting journey together.</p>
                <p className="mt-6">Join us in making every event a masterpiece!</p>
            </div>
        </div>
    );
};

export default AboutUs;