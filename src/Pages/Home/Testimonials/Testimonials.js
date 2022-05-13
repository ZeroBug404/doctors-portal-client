import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {

    const testimonials = [
        {
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        }
    ]

    return (
        <div>
            <div className='flex justify-between px-12'>
                <div>
                    <h4 className='text-primary font-bold mb-3'>Testimonial</h4>
                    <h2 className='text-4xl mb-5'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-10'>
                {
                    testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;