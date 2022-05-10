import React from 'react';
import Infocard from '../InfoCard/Infocard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 px-7'>
            <Infocard img={clock} bgColor={'bg-gradient-to-r from-cyan-500 to-blue-400'}></Infocard>
            <Infocard img={marker} bgColor={'bg-accent'}></Infocard>
            <Infocard img={phone} bgColor={'bg-gradient-to-r from-cyan-500 to-blue-400'}></Infocard>
        </div>
    );
};

export default Info;