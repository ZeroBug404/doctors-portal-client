import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonial from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;